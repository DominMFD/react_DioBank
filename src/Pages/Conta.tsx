import { useContext } from "react";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

export const Conta = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const {id} = useParams()

  if(user.userId !== id) {
    navigate('/')
  }



  return (
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
  );
};
