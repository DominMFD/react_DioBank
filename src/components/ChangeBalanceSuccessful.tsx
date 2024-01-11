import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"


interface IChangeBalanceSuccessful {
    title: string
}

export const ChangeBalanceSuccessful = ({ title }: IChangeBalanceSuccessful) => {

    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate('/')
    }

    return (
        <Box backgroundColor='#FFF'
        borderRadius="25px"
        padding="15px"
        width="80%"
        maxW="2xl">
            <Flex
            alignItems='center'
            gap='10'>
                <Icon as={ArrowBackIcon} 
                color='#000'
                boxSize={6}
                onClick={handleMainPage}
                cursor='pointer'/>
                <Center
                fontSize="medium"
                fontWeight="600"
                alignSelf='center'>
                <Text>{title === 'deposit' ? 'Seu deposito foi feito com sucesso!' : 'Seu saque foi feito com sucesso!'}</Text>
                </Center>
            </Flex>
            
        </Box>
    )
}