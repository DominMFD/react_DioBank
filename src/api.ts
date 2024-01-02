import axios from "axios"
import { IUserData } from "./Interfaces/IUserData"

const token = '123456789';



export const api = async (email: string): Promise<IUserData | void> => {

    await axios.get(`http://localhost:5000/user/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response && response.data) {
            console.log('Dados recebidos:', response.data);
            return response.data;

          } else {
            console.error('Resposta da API sem dados.');
          }
        })
      .catch(error => {
        console.error('Erro:', error);
      });
}