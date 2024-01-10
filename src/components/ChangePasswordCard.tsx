import { Box, Center, Input, Text } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useContext, useState } from "react"
import { AppContext } from "./AppContext"

export const ChangePasswordCard = () => {

    const { user } = useContext(AppContext)

    const [currentPassword, setCurrentPassword] = useState<string>('')
    const [verifyCurrentPassword, setVerifyCurrentPassword] = useState<boolean>(true)
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [verifyPassword, setVerifyPassword] = useState<boolean>(true)
    const [verifyEqualsPassword, setVerifyEqualsPassword] = useState<boolean>(false)
    const [isSuccessful, setIsSuccessful] = useState<boolean>()

    const handleChangePassword = () => {
        if(currentPassword !== user.password) {
            setVerifyCurrentPassword(false)
        }

        if(newPassword !== currentPassword) {
            setVerifyPassword(false)
        }

        if(currentPassword === user.password && newPassword === confirmPassword && newPassword === user.password) {
            setVerifyEqualsPassword(true)
        }

        if(verifyCurrentPassword && verifyPassword && !verifyEqualsPassword && newPassword !== '') {
            
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
            onChange={(event) => setCurrentPassword(event.target.value)}
            />
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
            marginTop={8}
            onChange={(event) => setNewPassword(event.target.value)}
            />
            <Input
            placeholder="Confirme a nova senha"
            marginTop={3}
            marginBottom={8}
            onChange={(event) => setConfirmPassword(event.target.value)}
            />
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