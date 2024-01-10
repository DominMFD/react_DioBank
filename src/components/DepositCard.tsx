import { Box, Center, Input, Text } from "@chakra-ui/react"
import { Botao } from "./Button"

export const DepositCard = () => {


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
            <Center>
                <Text
                fontSize={'xx-large'} 
                marginBottom={8}
                fontWeight={'extrabold'}>
                    Depositar Dinheiro
                </Text> 
            </Center>
            <Input
            placeholder="Digite seu novo email"/>
            <Box
            marginTop={8}>
                <Botao
                title="Alterar email"
                event={() => {}}/>
            </Box>
        </Box>
    )
}