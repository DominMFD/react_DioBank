import { Box, Center, Input, Text } from "@chakra-ui/react"
import { Botao } from "./Button"

export const ChangePasswordCard = () => {
    return (
        <Box
        backgroundColor='gray.700'
        color={'white'}
        minHeight="120px"
        padding={8}
        borderRadius="25px"
        width={'80%'}
        maxW='xl'>
            <Center>
            <Text 
                fontSize={'xx-large'} 
                marginBottom={8}
                fontWeight={'extrabold'}
                >
                Alterar Senha
                </Text>
            </Center>
            <Input
            placeholder="Digite sua senha atual"
            />
            <Input
            placeholder="Digite a nova senha"
            marginTop={8}
            />
            <Input
            placeholder="Confirme a nova senha"
            marginTop={3}
            marginBottom={8}
            />
            <Botao
            title="Alterar senha"
            event={() => {}}
            />

        </Box>
    )
}