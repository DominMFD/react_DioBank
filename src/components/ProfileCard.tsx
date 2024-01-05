import { Box, Center, Table, Td, Text, Tr } from "@chakra-ui/react"
import { IUserData } from "../Interfaces/IUserData"
import { Botao } from "./Button"
import { useNavigate } from "react-router-dom"

interface IProfileCard {
    data: IUserData
}

export const ProfileCard = ({data}: IProfileCard) => {
    const navigate = useNavigate()

    const handleConta = () => {
        navigate(`/conta/${data.userId}`)

        if(data === undefined) {
            data = {
                userId: '',
                name: '',
                email: '',
                password: '',
                balance: 0  

            }
          navigate('/')
        }
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
            <Table marginBottom={16}>
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
            <Center>
                <Botao 
                title="Conta" 
                event={handleConta}/>
            </Center>
        </Box>
    )
}