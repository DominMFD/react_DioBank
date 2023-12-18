import { Box, Center, Input } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useState } from "react";
import { login } from "../services/login";

interface IUserCard {
    title: string
}

export const Card = ({title}: IUserCard) => {

    const [email, setEmail] = useState<string>('');

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
          <Botao title="Login" event={() => login(email)} />
        </Center>
      </Box>
    );
    
}