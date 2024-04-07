import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import ProductEdit from './pages/ProductEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/new" element={<ProductEdit />} />
        <Route path="/products/:id/edit" element={<ProductEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
