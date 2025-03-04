import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Center, Icon, Input, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { Botao } from "../components/Button"
import { ConfirmDeleteAccount } from "./ConfirmDeleteAccount"
import { instance } from "../services/api"
import { DeleteAccountSuccessful } from "./DeleteAccountSuccessful"
import { changeLocalStorage } from "../services/storage"


export const DeleteAccountCard = () => {

    const { user, setIsLoggedIn } = useContext(AppContext)

    const [password, setPassword] = useState<string>('')
    const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<boolean>(false)
    const [deleteAccount, setDeleteAccount] = useState<boolean>(false)
  
    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate(`/`)
    }

    const handleDelete = () => {
        if(password === user.password) {
            setPasswordIsValid(true)
        }

        if(password !== user.password) {
            setErrorMessage(true)
        }
    }

    const handleCancelDelete = () => {
        setPassword('')
        setPasswordIsValid(false)
    }

    const ConfirmDelete = () => {
        instance.delete(`/user/${user.userId}`)
        .then((response) => {
            setDeleteAccount(true)
            changeLocalStorage({login: false, user: {}})
            setIsLoggedIn(false)
        })
        .catch (error => {
            setErrorMessage(true)
        })

    }

    if(deleteAccount) {
        return (
           <DeleteAccountSuccessful/>
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
                    Deletar Conta
                </Text> 
            </Center>
            {passwordIsValid ?
                <ConfirmDeleteAccount 
                eventButton1={ConfirmDelete}
                eventButton2={handleCancelDelete}/> :
                <>
                <Input
                placeholder="Digite sua senha"
                type='password'
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                />
                <Text color={'red.300'}
                display={errorMessage ? 'initial' : 'none'}>
                Senha incorreta
                </Text>
                <Box
                marginTop={8}>
                <Botao
                title="Excluir a Conta"
                event={handleDelete}/>
                </Box>
                </>       
            }  
        </Box>
    )
} 