const express = require('express');
const sequelize = require('./databas/database.js'); // Corrected path
const path = require('path');

// Corrected model imports
const User = require('./models/models/user.js');
const Product = require('./models/models/product.js');
const Cart = require('./models/models/cart.js');
const CartProduct = require('./models/models/cartProduct.js');
const Rating = require('./models/models/rating.js');

// Import routes
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const cartProductRoutes = require('./routes/cartProduct');
const ratingRoutes = require('./routes/rating');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/cartProducts', cartProductRoutes);
app.use('/ratings', ratingRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Synchronize the database and start the server
sequelize.sync().then(() => {
  console.log('Database synchronized');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error('Failed to synchronize the database', error);
});
