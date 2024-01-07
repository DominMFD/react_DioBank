import { IUserData } from "../Interfaces/IUserData"
import { instance } from "./api"
import { userDefine } from "./user"



export const login = async (email: string, password: string) : Promise<boolean> => {


  const data: IUserData  = await userDefine(email)

    if(email !== data?.email || password !== data?.password) {
        return false
    }


    return true
    
}
