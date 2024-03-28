// Exempel på en enkel bas-URL för din API-server
const API_BASE_URL = 'http://localhost:3000/api';

// Funktion för att hämta data
const fetchSomeData = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response;
};

// Funktion för att bearbeta svaret
const processResponse = async (response) => {
  // Kontrollera Content-Type för att säkerställa att svaret är JSON
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new TypeError('Received non-JSON response from server');
  }

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
};

// Använda funktionerna
const response = fetchSomeData();
processResponse(response);

// Funktion för att hämta alla produkter
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    return await processResponse(response);
  } catch (error) {
    console.error("Could not fetch products: ", error);
    throw error; // Kasta om felet så att det kan hanteras uppströms
  }
};

// Funktion för att hämta en produkt baserat på dess ID
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return await processResponse(response);
  } catch (error) {
    console.error(`Could not fetch product with id ${id}: `, error);
    throw error;
  }
};
