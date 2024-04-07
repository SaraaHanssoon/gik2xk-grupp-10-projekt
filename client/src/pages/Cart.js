import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';

// Antag att dessa funktioner och/eller states finns för att interagera med din varukorg
// Du kan behöva anpassa dessa delar beroende på hur din app är uppbyggd
// import { getCartItems, removeFromCart, getCartTotal } from '../api/cart';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Hämta varukorgsprodukter och totalpris
    // Exempel: setCartItems(getCartItems());
    // setTotal(getCartTotal());
  }, []);

  const handleRemoveFromCart = (productId) => {
    // Exempel: removeFromCart(productId);
    // Uppdatera sedan state baserat på borttagningen
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Din Varukorg
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem 
            key={item.id} 
            secondaryAction={
              <Button variant="outlined" onClick={() => handleRemoveFromCart(item.id)}>Ta bort</Button>
            }
          >
            <ListItemText primary={item.name} secondary={`Pris: ${item.price} kr`} />
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <ListItemText primary="Totalt" secondary={`${total} kr`} />
        </ListItem>
      </List>
    </Container>
  );
}

export default Cart;
