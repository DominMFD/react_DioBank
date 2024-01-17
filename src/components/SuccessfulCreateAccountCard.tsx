import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

interface ISuccessfulCreateAccountCard {
    name: string
}

export const SuccessfulCreateAccountCard = ({name}: ISuccessfulCreateAccountCard) => {


    return (
        <Box backgroundColor='gray.700'
        color='#FFF'
        borderRadius="25px"
        padding="15px"
        width="80%"
        maxW="2xl">
            <Center
            fontSize="medium"
            fontWeight="600">
                <Text>Conta criada com sucesso!!! Bem vindo(a) ao nosso banco, {name}</Text>
            </Center>
        </Box>
    )
}
