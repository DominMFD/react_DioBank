import { AlertTitle, Box, Center, Flex, Input } from "@chakra-ui/react"
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
    const { setIsLoggedIn, setEmailTitle } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
      if (email === '') {
        return alert('Preencha o campo email')
      }
      const loggedIn = await login(email, password)

      if (!loggedIn ) {
        return alert( 'Email ou senha inválido')
      }
      
      setIsLoggedIn(true)
      changeLocalStorage({login: true})
      navigate('/conta/1')
      setEmailTitle(email)
    }

    return (
        <Box backgroundColor="#FFFFFF" 
        borderRadius="25px" 
        padding="15px" 
        maxW='max-content'>
        <Center
        marginBottom='5'
        fontSize='2xl'
        fontWeight='600'>
          <h1>{title}</h1>
        </Center>
        <Input 
        maxWidth='7xl'
        placeholder="email"
        marginBottom='2'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
        <Input 
        placeholder="password" 
        value={password}
        onChange={(event) => setPassword(event.target.value)} />
        <Flex gap='2'>
          <Botao title="Login" event={() => validateUser(email, password)} />
          <Botao title="Criar Conta" event={() => validateUser(email, password)} />
        </Flex>
      </Box>        
    );
    
}