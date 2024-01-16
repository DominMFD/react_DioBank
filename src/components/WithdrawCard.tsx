import { Box, Center, Input, Text, Icon } from "@chakra-ui/react"
import { Botao } from "./Button"
import { useContext, useState } from "react"
import { AppContext } from "./AppContext"
import { instance } from "../services/api"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { ChangeBalanceSuccessful } from "./ChangeBalanceSuccessful"
import { useNavigate } from "react-router-dom"

export const WithdrawCard = () => {

    const { user } = useContext(AppContext)

    const [money, setMoney] = useState<number>();
    const [valueInput, setValueInput] = useState<string>();
    const [invalidNumber, setInvalidNumber] = useState<boolean>();
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate(`/conta/${user.userId}`)
    }

    const withdrawMoney = async () => {
        console.log(money)
        if(money !== 0) {
            await instance.put(`/account/${user.userId}`, {
                name: user.name,
                email: user.email,
                password: user.password,
                balance: money,
            })
            .then( response => {
                setIsSuccessful(true)
                setInvalidNumber(false)
                console.log(money)
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
            <ChangeBalanceSuccessful title="withdraw" />
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
                    Sacar Dinheiro
                </Text> 
            </Center>
            <Input
            placeholder="Digite seu novo email"
            onChange={(event) => setMoney(Number(event.target.value))}
            value={valueInput}/>
            <Text 
            textColor="red.300"
            display={invalidNumber ? "hidden" : "none"}>
            Por favor digite apenas números.
            </Text>
            <Box
            marginTop={8}>
                <Botao
                title="Sacar"
                event={withdrawMoney}/>
            </Box>
            
        </Box>
    )
}