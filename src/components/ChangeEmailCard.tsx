import { Box, Center, Input, Text, Icon } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useContext, useState } from "react"
import { instance } from "../services/api"
import { AppContext } from "./AppContext"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { ChangeInfoSuccessful } from "./ChangeInfolSuccessful"
import { useNavigate } from "react-router-dom"

export const ChangeEmailCard = () => {

    const  { user } = useContext(AppContext)

    const [email, setEmail] = useState<string>('')
    const [emailIsValid, setEmailIsValid] = useState<boolean>(true)
    const [emailExists, setEmailExists] = useState<boolean>(false)
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false)
    const { setEmailTitle } = useContext(AppContext)

    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate('/')
    }

    const handleChangeEmail = async () => {
        

        if(email.includes('@')) {
               await instance.put(`/user/${user.userId}`, {
                name: user.name,
                email: email,
                password: user.password,
                balance: 0
            })
            .then( response => {
                setEmailTitle(email)
                setIsSuccessful(true)
            })
            .catch((error) => {
                setEmailExists(true)
            })
            
        } else {
            setEmailIsValid(false)
        }

        
    
    }

    if(isSuccessful) {
        return (
            <ChangeInfoSuccessful title="Seu Email" />
        )
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