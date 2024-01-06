import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { IUserData } from "../Interfaces/IUserData"
import { instance } from "../services/api"

interface IAppContext {
    user: IUserData,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
    email: string
    setEmailTitle: (email: string) => void
    setUser: (user: IUserData) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [user, setUser] = useState<IUserData | any>({
        userId: '',
        name: '',
        email: '',
        password: '',
        balance: 0
    })
    const [email, setEmailTitle] = useState<string>('')

    const storage = getAllLocalStorage()

    useEffect(() => {
        if(storage) {
            const { login } = JSON.parse(storage)
            setIsLoggedIn(login)
        }
    }, [storage])

    useEffect(() => {
       (async () => {
        if(email !== '') {
            const { data } = await instance.get(`/user/${email}`)
            setUser(data)
        }

       })()
    })


    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, setEmailTitle, email,setUser }}>
            { children }
        </AppContext.Provider>
    )
}