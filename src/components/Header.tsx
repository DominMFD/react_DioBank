import { Button, Center, ChakraProvider, Flex } from '@chakra-ui/react'
import { AppContext } from './AppContext'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false)
    navigate('/')
  }


  
  return( 
    <ChakraProvider>
      <Flex p={2} bg="gray.700" alignItems={'center'}> 
        <Center color='pink.500' fontWeight='bold' fontSize='xx-large' flex={1}>
          <Link to={'/'} title='Página Inicial'>Domin Bank</Link>
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
