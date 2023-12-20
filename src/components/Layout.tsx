import { Box, ChakraProvider } from "@chakra-ui/react"
import { Header } from "./Header"




export const Layout = ({ children }: any) => {

  return(
    <ChakraProvider>
        <Header />
        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
          { children }
        </Box>
      </ChakraProvider>
  )
}