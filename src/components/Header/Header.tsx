import { Center, ChakraProvider } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <ChakraProvider>
      <Center bg="gray.700" p='2' color='pink.500' fontWeight='bold' fontSize='xx-large'>
        Dio Bank
      </Center>
    </ChakraProvider>
  )
}
