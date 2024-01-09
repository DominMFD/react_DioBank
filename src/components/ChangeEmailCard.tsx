import { Box, Center, Input, Text } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useContext, useState } from "react"
import { instance } from "../services/api"
import { AppContext } from "./AppContext"
import { userDefine } from "../services/user"
import { useNavigate } from "react-router-dom"

export const ChangeEmailCard = () => {

    const navigate= useNavigate()
    const  { user, setIsLoggedIn } = useContext(AppContext)

    const [email, setEmail] = useState<string>('')
    const [emailIsValid, setEmailIsValid] = useState<boolean>(true)
    const [emailExists, setEmailExists] = useState<boolean>(false)
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false)
    const { setEmailTitle } = useContext(AppContext)

    const handleChangeEmail = async () => {

        const data = await userDefine(email)
        

        if(email.includes('@')) {
            console.log(email)
                instance.put(`/user/${user.userId}`, {
                name: user.name,
                email: email,
                password: user.password,
                balance: 0
            })
            .then( response => {
                console.log(response)
                setEmailTitle(email)
            })
            .catch((error) => {
                setEmailExists(true)
            })
            
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
             {emailExists ? (
                <Text
                textColor="red.300">
                    Email já cadastrado
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