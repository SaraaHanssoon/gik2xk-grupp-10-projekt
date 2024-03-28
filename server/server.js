const express = require('express');
const sequelize = require('./models/models/modelladdare.js');

// Importera dina modeller
const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');
const CartProduct = require('./models/cartProduct');
const Rating = require('./models/rating');

// Importera dina routes
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const cartProductRoutes = require('./routes/cartProduct');
const ratingRoutes = require('./routes/rating');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware för att tolka JSON-bodies

// Använd dina routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/cartProducts', cartProductRoutes);
app.use('/ratings', ratingRoutes);

// Synkronisera databasen och starta servern
sequelize.sync().then(() => {
  console.log('Databasen synkroniserad');
  app.listen(PORT, () => console.log(`Servern körs på port ${PORT}`));
}).catch((error) => {
  console.error('Kunde inte synkronisera databasen', error);
});
