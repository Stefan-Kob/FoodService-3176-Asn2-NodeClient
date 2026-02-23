const axios = require('axios');

// Render API URL
const API_BASE = 'https://foodservice-3176-asn2.onrender.com/api/food';

// Function to call the Food API and test the endpoints
async function callFoodAPI() {
  try {
    // Get all foods
    console.log('=== GET /api/food/ ===');
    const allFoods = await axios.get(API_BASE);
    console.log('All foods:', JSON.stringify(allFoods.data, null, 2));

    // Get food by ID (example: ID 1)
    console.log('\n=== GET /api/food/1 ===');
    const food1 = await axios.get(`${API_BASE}/1`);
    console.log('Food ID 1:', JSON.stringify(food1.data, null, 2));

  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.status, error.response.data);
    } else {
      console.error('Request failed:', error.message);
    }
  }
}

// Call the function to test the API when project is ran
callFoodAPI();