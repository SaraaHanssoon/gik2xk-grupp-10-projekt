import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import RatingComponent from '../components/RatingComponent';
import { fetchProductById } from '../api/products';



// Antag att denna funktion finns för att hämta produktinformation
// import { fetchProductById } from '../api';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulera ett API-anrop
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {product.name}
        </Typography>
        <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%' }} />
        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>
        <RatingComponent value={product.rating} readOnly />
      </Box>
    </Container>
  );
}

export default ProductDetails;
