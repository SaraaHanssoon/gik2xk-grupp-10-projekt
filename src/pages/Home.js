import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
// Antag att fetchProducts är din funktion för att hämta produkter
import { fetchProducts } from '../api/products';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error loading products:", error.message);
        // Visa ett felmeddelande eller hantera felet på något sätt
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      {products && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Home;
