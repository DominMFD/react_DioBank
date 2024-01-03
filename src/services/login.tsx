
import { IUserData } from "../Interfaces/IUserData"
import { instance } from "../api"


export const login = async (email: string, password: string) : Promise<boolean> => {
  const data: IUserData = await instance.get(`/user/${email}`)
  .then(response => {
    return response.data
  })

    if(email !== data?.email || password !== data?.password) {
        return false
    }

    return true
    
}
