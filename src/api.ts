import axios from "axios"
import { IUserData } from "./Interfaces/IUserData"

const token = '123456789';



export const api = async (email: string): Promise<any> => {
  try {
    const response = await axios.get(`http://localhost:5000/user/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response && response.data) {
      return response.data;
    } else {
      console.error('Resposta da API sem dados.');
      return null;
    }
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};