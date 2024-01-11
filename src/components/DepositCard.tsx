import { Box, Center, Input, Text } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useContext, useState } from "react"
import { AppContext } from "./AppContext"
import { instance } from "../services/api"
import { ChangeBalanceSuccessful } from "./ChangeBalanceSuccessful"

export const DepositCard = () => {

    const { user } = useContext(AppContext)

    const [money, setMoney] = useState<number>();
    const [valueInput, setValueInput] = useState<string>();
    const [invalidNumber, setInvalidNumber] = useState<boolean>();
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

    const depositMoney = async () => {
        if(money !== 0) {
            await instance.put(`/user/${user.userId}`, {
                name: user.name,
                email: user.email,
                password: user.password,
                balance: money,
            })
            .then( response => {
                setIsSuccessful(true)
                setInvalidNumber(false)
            })
            .catch((error) => {
                console.log('oi catch2')
                setIsSuccessful(false)
                console.log('oi')
            })
        }

        if(money === 0) {
            setInvalidNumber(true)
        }

    }


        if(isSuccessful) {
            return(
                <ChangeBalanceSuccessful title="deposit" />
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
            <Center>
                <Text
                fontSize={'xx-large'} 
                marginBottom={8}
                fontWeight={'extrabold'}>
                    Depositar Dinheiro
                </Text> 
            </Center>
            <Input
            placeholder="Digite o valor para depositar (Apenas números)"
            type='number'
            onChange={(event) => setMoney(Number(event.target.value))}
            value={valueInput}
            />
            <Text 
            textColor="red.300"
            display={invalidNumber ? "hidden" : "none"}>
            Por favor digite apenas números.
            </Text>

            <Box
            marginTop={8}>
                <Botao
                title="Depositar"
                event={depositMoney}/>
            </Box>
        </Box>
    )
}