
import { api } from "../api"


export const login = async (email: string, password: string) : Promise<boolean> => {
  const data: any = await api(email)
  
  
    console.log(data)

    if(email !== data?.email || password !== data?.password) {
        return false
    }

    return true
    
}
