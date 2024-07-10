import axios from 'axios';

const endpoint = 'http://localhost:5000/chat';

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(endpoint, { message });
    return response.data.answer;
  } catch (error) {
    console.error('Erro ao se comunicar com o backend:', error);
    throw error;
  }
};
