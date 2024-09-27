import axios from 'axios';

// Função para fazer a predição
export const predictChurn = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/predict', formData);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer a predição:", error);
    throw error; 
  }
};
