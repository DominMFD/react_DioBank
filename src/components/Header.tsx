import { Box, Button, Center, ChakraProvider, Flex } from '@chakra-ui/react'
import { AppContext } from './AppContext'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false, user: {}})
    setIsLoggedIn(false)
    navigate('/')
  }


  
  return( 
    <ChakraProvider>
      <Box p={2} 
      bg="gray.700" 
      alignItems={'center'}> 
        <Center 
        color='#52b788' 
        fontWeight='bold' 
        fontSize='xx-large' 
        flex={1} 
        _hover={{color: '#2d6a4f'}}>
          <Link 
          to={'/'} 
          title='Página Inicial'>Domin<span style={{color: 'white'}}>Bank</span>
          </Link>
      </Center>
      {
        isLoggedIn && (
          <Center
          position='absolute'
          top={'3'}
          right={'3'}>
          <Button onClick={logout} title='Sair'> Sair </Button>
        </Center>
        )
      }
      </Box>
    </ChakraProvider>
  )
}
