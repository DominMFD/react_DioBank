import { Box, ChakraProvider } from "@chakra-ui/react"




export const Layout = ({ children }: any) => {

  return(
    <ChakraProvider>
        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
          { children }
        </Box>
      </ChakraProvider>
  )
}