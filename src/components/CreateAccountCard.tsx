import { Box, Center, FormControl, FormHelperText, FormLabel, Icon, Input, Text } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useState } from "react";
import { instance } from "../services/api";
import { SuccessfulCreateAccountCard } from "./SuccessfulCreateAccountCard";
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

export const CreateAccountCard = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [nameError,setNameError] = useState<boolean>()
    const [emailError,setEmailError] = useState<boolean>()
    const [emailIsValid,setEmailIsValid] = useState<boolean>()
    const [passwordError,setPasswordError] = useState<boolean>()

    const [createSuccessful, setCreateSuccessfull] = useState<boolean>()
    const [userExists, setUserExists] = useState<boolean>()

    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate('/')
    }

    const verifyUser = async (emailUser: string): Promise<boolean> => {
        const data = await instance.get(`/user/${email}`)
            .then(response => {
                return response.data
            })

            if(data.email === emailUser){
                setUserExists(true)
                return false
            }
           
            console.log('ola')

            return true
    } 

    const handleSubmit = async () => {
        console.log('oi')

        if(name === '' || email === '' || password === '' || !email.includes('@')) {
            name === '' ? setNameError(true) : setNameError(false)
            email === '' ? setEmailError(true) : setEmailError(false)
            password === '' ? setPasswordError(true) : setPasswordError(false)
            !email.includes('@') ? setEmailIsValid(true) : setEmailIsValid(false)   
        } else {
                if(await verifyUser(email)) {
                await instance.post('/user', {
                name: name,
                email: email,
                password: password
                })
                .then((response: any) => {
                console.log(response)
                console.log('Conta criada com sucesso')
                setCreateSuccessfull(true)
                
                })
                .catch((error) => {
                console.log(error)
                setUserExists(true)
                console.log("Post falhou")
                })
            }
                
        }
    }

    if(createSuccessful) {
        return (
            <SuccessfulCreateAccountCard name={name}/>
        )
    }


    return(
        <Box backgroundColor="gray.700"
        color='#FFF'
        borderRadius="25px"
        padding="15px"
        width="80%"
        maxW="2xl">
            <Icon as={ArrowBackIcon} 
                color='#FFF'
                boxSize={6}
                onClick={handleMainPage}
                cursor={'pointer'}
                position='absolute'
                marginTop={'2'}/>     
            <Center
            marginBottom='5'
            fontSize='2xl'
            fontWeight='700'>
                <h1>Criar Conta</h1>
            </Center>
            {userExists ? (
                <Center>
                    <Text 
                    color='red.400'
                    fontSize='medium'>
                        Email já cadastrado!
                    </Text>
                </Center>
            ): (
                <>
                </>
            )}
            <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input 
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}/>
                {nameError ? (
                    <FormHelperText 
                    textColor="red.300">
                        Nome obrigatório
                    </FormHelperText>
                ) : (
                    <></>
                )}
                <FormLabel
                marginTop="2">Email</FormLabel>
                <Input 
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}/> 
                { emailError ? (
                    <FormHelperText
                    textColor="red.300"
                    >
                        Endereço de email obrigatório
                    </FormHelperText>
                ) : (
                    <></>
                )
                }
                {emailIsValid ? (<FormHelperText
                    textColor="red.300">
                        Endereço de email inválido
                    </FormHelperText>
                ) : (
                    <></>
                )}
                <FormLabel
                marginTop="2">Senha</FormLabel>
                <Input 
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>
                { passwordError ? (
                    <FormHelperText
                    textColor="red.300">
                        Senha obrigatória
                    </FormHelperText>
                ) : (
                    <></>
                )}
            </FormControl>
            <Center marginTop="5">
                <Botao
                title="Criar conta" 
                event={async () => await handleSubmit()}/>
            </Center>
        </Box>
    )
}