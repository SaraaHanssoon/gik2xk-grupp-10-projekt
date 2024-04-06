// src/api/products.js
const API_BASE_URL = 'http://localhost:3000/api';

// Helper function to process the response
async function processResponse(response) {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new TypeError('Received non-JSON response from server');
  }
  return await response.json();
}

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    return await processResponse(response);
  } catch (error) {
    console.error("Could not fetch products:", error);
    throw error;
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return await processResponse(response);
  } catch (error) {
    console.error(`Could not fetch product with id ${id}:`, error);
    throw error;
  }
};
