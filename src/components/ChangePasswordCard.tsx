import { Box, Center, Input, Text, Icon } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useContext, useState } from "react"
import { AppContext } from "./AppContext"
import { instance } from "../services/api"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { ChangeInfoSuccessful } from "./ChangeInfolSuccessful"
import { useNavigate } from "react-router-dom"

export const ChangePasswordCard = () => {

    const { user } = useContext(AppContext)

    const [currentPassword, setCurrentPassword] = useState<string>('')
    const [verifyCurrentPassword, setVerifyCurrentPassword] = useState<boolean>(true)
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [verifyPassword, setVerifyPassword] = useState<boolean>(true)
    const [verifyEqualsPassword, setVerifyEqualsPassword] = useState<boolean>(false)
    const [isSuccessful, setIsSuccessful] = useState<boolean>()

    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate('/')
    }

    const handleChangePassword = async () => {
        if(currentPassword !== user.password) {
            setVerifyCurrentPassword(false)
        }

        if(newPassword !== confirmPassword) {
            setVerifyPassword(false)
        }

        if(currentPassword === user.password && newPassword === confirmPassword && newPassword === user.password) {
            setVerifyEqualsPassword(true)
        }

        if(verifyCurrentPassword && verifyPassword && !verifyEqualsPassword && newPassword !== '') {
            await instance.put(`/user/${user.userId}`, {
                name: user.name,
                email: user.email,
                password: newPassword,
                balance: 0
            })
            .then( response => {
                setIsSuccessful(true)
            })
            .catch((error) => {
   
            })
        }
    }

    if(isSuccessful){
        return (
            <ChangeInfoSuccessful title="senha"/>
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
        maxW='xl'>
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
                fontWeight={'extrabold'}
                >
                Alterar Senha
                </Text>
            </Center>
            {verifyEqualsPassword ? (
                <Text 
                textColor="red.300">
                Não é possivel mudar para uma senha igual a usada atualmente.
                </Text>
            ) : (
                <></>
            )}
            <Input
            placeholder="Digite sua senha atual"
            type="password"
            onChange={(event) => setCurrentPassword(event.target.value)}
            value={currentPassword}/>
            {verifyCurrentPassword ? (
                <></>
            ) : (
                <Text 
                textColor="red.300">
                Senha atual incorreta.
                </Text>
            )}
            <Input
            placeholder="Digite a nova senha"
            type="password"
            marginTop={8}
            onChange={(event) => setNewPassword(event.target.value)}
            value={newPassword}/>
            <Input
            placeholder="Confirme a nova senha"
            type="password"
            marginTop={3}
            marginBottom={8}
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}/>
            { verifyPassword ? (
                <>
                </>
            ) : (
                <Text 
                textColor="red.300">
                Senhas não coincidem
                </Text>
            )}
            <Botao
            title="Alterar senha"
            event={handleChangePassword}
            />

        </Box>
    )
}