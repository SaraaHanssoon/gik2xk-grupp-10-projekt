import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

// Antag att dessa funktioner finns för att interagera med din backend
// import { getProductById, saveProduct, updateProduct } from '../api';

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (id) {
      // getProductById(id).then(data => setProduct(data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lägg till eller uppdatera produkt logik
    if (id) {
      // await updateProduct(id, product);
    } else {
      // await saveProduct(product);
    }
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        {id ? 'Redigera Produkt' : 'Lägg till Produkt'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Namn"
          name="name"
          value={product.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Beskrivning"
          name="description"
          value={product.description}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Pris"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Bild-URL"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Spara
        </Button>
      </form>
    </Container>
  );
}

export default ProductEdit;
