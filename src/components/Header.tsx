import { Button, Center, ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { AppContext } from './AppContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }


  
  return( 
    <ChakraProvider>
      <Flex p={2} bg="gray.700" alignItems={'center'}> 
        <Center color='pink.500' fontWeight='bold' fontSize='xx-large' flex={1}>
          <Text>Dio Bank</Text>
      </Center>
      {
        isLoggedIn && (
          <Center>
          <Button onClick={logout}> Sair </Button>
        </Center>
        )
      }
      </Flex>
    </ChakraProvider>
  )
}
