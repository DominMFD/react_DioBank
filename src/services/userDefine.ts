import { IUserData } from "../Interfaces/IUserData"
import { instance } from "./api"

export const userDefine = async (email: string): Promise<IUserData> => {
    const data: IUserData = await instance.get(`/user/${email}`)
  .then(response => {
    return response.data
  })
  .catch((error) => {
    console.log('login falhou')
  })

  return data
}