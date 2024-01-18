
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";


export const DeleteAccountSuccessful = () => {

    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate(`/`)
    }

    return(
        <Flex
        backgroundColor='gray.700'
        color={'white'}
        minHeight="120px"
        padding={8}
        gap={10}
        borderRadius="25px"
        width={'80%'}
        maxW='xl'
        alignItems={'center'}
        >
            <Icon as={ArrowBackIcon} 
                color='#FFF'
                boxSize={6}
                onClick={handleMainPage}
                cursor={'pointer'}
                position='relative'
                title={'Pagina Inicial'}/>
                <Text
                fontWeight={'bold'}
                color={'white'}>
                Usuário excluido com sucesso!
                </Text>
        </Flex>
    )
}