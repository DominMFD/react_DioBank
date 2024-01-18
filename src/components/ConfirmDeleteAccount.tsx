import { Flex, Text } from "@chakra-ui/react"
import { Botao } from "./Button"

interface IConfirmDeleteAccount {
    eventButton1: () => void
    eventButton2: () => void
}

export const ConfirmDeleteAccount = ({
    eventButton1,
    eventButton2
}: IConfirmDeleteAccount) => {
    return (
        <>
         <Text
         fontWeight={'bold'}>
            Tem certeza que deseja excluir sua conta?
         </Text>
         <Flex 
            gap={2}
            marginTop={8}>
                <Botao
                title="Sim"
                event={eventButton1}/>
                <Botao 
                title="Não"
                event={eventButton2}/>
            </Flex>
        </>
       
    )
}