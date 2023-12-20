import { Box, Center, Input } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

interface IUserCard {
    title: string
}

export const Card = ({title}: IUserCard) => {

    const [email, setEmail] = useState<string>('');
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
      const loggedIn = await login(email)

      if (!loggedIn ) {
        return alert( 'Email invalido')
      }
      
      setIsLoggedIn(true)
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
        <Input placeholder="password" />
        <Center>
          <Botao title="Login" event={() => validateUser(email)} />
        </Center>
      </Box>
    );
    
}