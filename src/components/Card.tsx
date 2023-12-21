import { Box, Center, Input } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { changeLocalStorage } from "../services/storage";

interface IUserCard {
    title: string
}

export const Card = ({title}: IUserCard) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
      const loggedIn = await login(email, password)

      if (!loggedIn ) {
        return alert( 'Email ou senha inválido')
      }
      
      setIsLoggedIn(true)
      changeLocalStorage({login: true})
      navigate('/conta/1')

    }

    return (
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>{title}</h1>
        </Center>
        <Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input 
        placeholder="password" 
        value={password}
        onChange={(event) => setPassword(event.target.value)} />
        <Center>
          <Botao title="Login" event={() => validateUser(email, password)} />
        </Center>
      </Box>
    );
    
}