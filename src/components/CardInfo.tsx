import { Box, Text } from "@chakra-ui/react";
import { IUserData } from "../Interfaces/IUserData";

enum cardType {
    acesso,
    conta,
}

interface ICardInfo {
    type: cardType,
    data: IUserData,
}

export const CardInfo = ({type, data}: ICardInfo) => {

    const actualData = new Date()

    const setBalanceColor = () => {
        if (data.balance > 0 )
        return 'whatsapp.400'
        if (data.balance < 0)
        return 'red.400'

        return 'white'
    }

    return (
        <Box
        backgroundColor='gray.700'
        color={'white'}
        minHeight="120px"
        padding={8}
        borderRadius="25px"
        >
         {type === 0 ? 
         <>
            <Text fontWeight={'bold'} fontSize={'x-large'}>
                Olá, {data.name}
            </Text>
            <Text>
                {actualData.getDay()} / {actualData.getMonth()} / {actualData.getFullYear()} - {actualData.getHours()}:{actualData.getMinutes()}
            </Text>
         </>
          : 
         <>
            <Text fontWeight={'bold'} fontSize={'x-large'}>
               Saldo
            </Text>
            <Text color={setBalanceColor()} fontWeight={'semibold'}>
                R$ {data.balance?.toFixed(2)}
            </Text>
         </>
         }
        </Box>
        
    )
}