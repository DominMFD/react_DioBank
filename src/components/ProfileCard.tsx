import { Box, Center, Flex, Table, Td, Text, Tr } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { IUserData } from "../Interfaces/IUserData"

interface IProfileCard {
    data: IUserData
}


export const ProfileCard = ({data}:  IProfileCard) => {
    const navigate = useNavigate()
    const { user } = useContext(AppContext)

    const handleConta = () => {
        navigate(`/conta/${user.userId}`)
    }

    const handleChangeEmail = () => {
        navigate('/alterarEmail')
    }

    const handleChangePassword = () => {
        navigate('/alterarSenha')
    }

    const handleDeleteAccount = () => {
        navigate('/deletarConta')
    }



    return (
        <Box
        backgroundColor='gray.700'
        color={'white'}
        minHeight="120px"
        padding={8}
        borderRadius="25px"
        >
            <Center>
                <Text 
                fontSize={'xx-large'} 
                marginBottom={8}
                fontWeight={'extrabold'}
                >
                Informações do usuário
                </Text>
            </Center>
            <Table marginBottom={3}>
                <Tr>
                    <Td 
                    fontSize={'large'} 
                    fontWeight={'bold'}
                    >
                    Nome:
                    </Td>
                    <Td 
                    fontSize={'large'}
                    >
                    {data.name}
                    </Td>
                </Tr>
                <Tr>
                    <Td 
                    fontSize={'large'} 
                    fontWeight={'bold'}
                    >
                    Email:
                    </Td>
                    <Td 
                    fontSize={'large'}
                    >
                    {data.email}
                    </Td>
                </Tr>
            </Table>
            <Flex 
            gap={2}
            marginBottom={6}>
                <Botao
                title="Alterar Email"
                event={handleChangeEmail}/>
                <Botao 
                title="Alterar Senha"
                event={handleChangePassword}/>
                <Botao 
                title="Deletar Conta"
                event={handleDeleteAccount}/>
            </Flex>
            <Center>
                <Botao 
                title="Conta"
                event={handleConta}/>
            </Center>
        </Box>
    )
}