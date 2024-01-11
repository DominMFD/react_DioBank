import { useContext } from "react";
import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Botao } from "../components/Button";

export const Conta = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const {id} = useParams()

  if(user.userId !== id) {
    navigate('/')
  }


  const handleDeposit = () => {
    navigate('/depositar')
  }

  
  const handleWithdraw = () => {
    navigate('/sacar')
  }

  return (
    <Center>
    <Box
    padding="15px"
    width="80%"
    maxW="2xl">
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {user.name === undefined || user.name === null ? (
            <Center>
              <Spinner size="xl" color="gray.700" />
            </Center>
          ) : (
            <>
              <CardInfo type={0} data={user} />
              <CardInfo type={1} data={user} />
            </>
          )  
          }
        </SimpleGrid>
      </Center>
      <Center>
        <SimpleGrid columns={2} spacing={32} paddingTop={8}>
              <Botao 
              title="Depositar Dinheiro" 
              event={handleDeposit}/>
              <Botao 
              title="Sacar Dinheiro"
              event={handleWithdraw}/>
        </SimpleGrid>
      </Center>
    </Box>
    </Center>
  );
};
