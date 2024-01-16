import { Box, ChakraProvider } from "@chakra-ui/react"
import { Header } from "./Header"




export const Layout = ({ children }: any) => {

  return(
    <ChakraProvider>
        <Box height="93.3vh" backgroundColor="#74c69d" padding="25px">
          { children }
        </Box>
      </ChakraProvider>
  )
}