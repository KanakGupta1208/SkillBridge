import axios from 'axios';

export const getAIResponse = async (prompt) => {
  try {
    const token = localStorage.getItem('token');
    // const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
    
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/ai`, 
      { prompt }, 
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.response;
  } catch (error) {
    console.error('Error getting AI response:', error);
    throw error;
  }
};


