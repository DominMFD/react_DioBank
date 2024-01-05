import { Box, Center, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useState } from "react";
import { IUserData } from "../Interfaces/IUserData";

export const CreateAccountCard = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [nameError,setNameError] = useState<boolean>()
    const [emailError,setEmailError] = useState<boolean>()
    const [emailIsValid,setEmailIsValid] = useState<boolean>()
    const [passwordError,setPasswordError] = useState<boolean>()

    const clearInputs = () => {
            setNameError(false)
            setEmailError(false)
            setPasswordError(false)
            setEmailIsValid(false)
            setName('')
            setEmail('')
            setPassword('')
    }


    const handleSubmit = () => {

        if(name === '' || email === '' || password === '' || !email.includes('@')) {
            name === '' ? setNameError(true) : setNameError(false)
            email === '' ? setEmailError(true) : setEmailError(false)
            password === '' ? setPasswordError(true) : setPasswordError(false)
            !email.includes('@') ? setEmailIsValid(true) : setEmailIsValid(false)   
        } else {    
            clearInputs()
            console.log(name);
            console.log(email);
            console.log(password);       
        }
    }


    return(
        <Box backgroundColor="#FFF"
        borderRadius="25px"
        padding="15px"
        width="80%"
        maxW="2xl">         
            <Center
            marginBottom='5'
            fontSize='2xl'
            fontWeight='700'>
                <h1>Criar Conta</h1>
            </Center>
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
                type="email"
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
                event={() => handleSubmit()}/>
            </Center>
        </Box>
    )
}