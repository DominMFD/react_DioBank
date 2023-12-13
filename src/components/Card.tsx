import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react"
import { Botao } from "./Button"

interface ICard {
  title: string,
  event: () => void
}

export const Card = ({ title, event }: ICard) => {
  return(
    <ChakraProvider>
        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
          <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Center>
              <Botao title="Login" event={event} />
            </Center>
          </Box>
        </Box>
      </ChakraProvider>
  )
}