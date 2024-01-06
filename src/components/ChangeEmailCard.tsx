import { Box, Center, Input, Text } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useState } from "react"

export const ChangeEmailCard = () => {

    const [email, setEmail] = useState<string>('')
    const [emailIsValid, setEmailIsValid] = useState<boolean>(true)

    const handleChangeEmail = () => {
        if(email.includes('@')) {
            console.log(email)
        } else {
            setEmailIsValid(false)
        }
        
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
            <Center>
                <Text
                fontSize={'xx-large'} 
                marginBottom={8}
                fontWeight={'extrabold'}>
                    Alterar email
                </Text> 
            </Center>
            <Input
            placeholder="Digite seu novo email"
            value={email}
            onChange={(event) => {setEmail(event.target.value)}} />
            {!emailIsValid ? (
                <Text
                textColor="red.300">
                    Email Inválido
                </Text>
            ) : (
                <>
                </>

            )}
            <Box
            marginTop={8}>
                <Botao
                title="Alterar email"
                event={handleChangeEmail}/>
            </Box>
            
        </Box>
    )
}