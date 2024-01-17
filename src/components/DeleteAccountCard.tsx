import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Center, Icon, Input, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { Botao } from "../components/Button"


export const DeleteAccountCard = () => {

    const { user } = useContext(AppContext)
  
    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate(`/`)
    }


    return (
        <Box
        backgroundColor='gray.700'
        color={'white'}
        minHeight="120px"
        padding={8}
        borderRadius="25px"
        width={'80%'}
        maxW='xl'
        >
            <Icon as={ArrowBackIcon} 
                color='#FFF'
                boxSize={7}
                onClick={handleMainPage}
                cursor={'pointer'}
                position='absolute'
                marginTop={'3'}/> 
            <Center>
                <Text
                fontSize={'xx-large'} 
                marginBottom={8}
                fontWeight={'extrabold'}>
                    Deletar Conta
                </Text> 
            </Center>
            <Input
            placeholder="Digite sua senha"
            type='password'
            onChange={() => {}}
            value={''}
            />
            <Box
            marginTop={8}>
                <Botao
                title="Excluir a Conta"
                event={() => {}}/>
            </Box>
        </Box>
    )
} 