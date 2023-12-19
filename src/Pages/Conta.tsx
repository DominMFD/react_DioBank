import { useEffect, useState } from "react";
import { api } from "../api";
import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { IUserData } from "../Interfaces/IUserData";
import { useNavigate, useParams } from "react-router-dom";

export const Conta = () => {
  const [userData, setUserData] = useState<any | IUserData>("");
  const [segundos, setSegundos] = useState<number>(5);
  const { id } = useParams();
  const navigate = useNavigate();

 
  
  const goToMenu = () => {
    navigate("/");
  };

  useEffect(() => {
    const getData = async () => {
      const data = await api;
      setUserData(data);
    };

    getData();
  });
     
 const interval = () => {
    segundos !== 0 ? setSegundos(segundos - 1) : setSegundos(0)
}
  setInterval(interval, 1000);

  
 

  if (userData && segundos === 0) goToMenu();

  

  return (
    <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {userData.name === undefined || userData.nome === null ? (
            <Center>
              <Spinner size="xl" color="gray.700" />
            </Center>
          ) : (
            userData && id !== userData.id   ? 
              <Text fontSize="larger" color="gray.700" fontWeight="bold">
                Usuário indisponivel você será redirecionado em {segundos}...
              </Text>
            :
            <>
              <CardInfo type={0} data={userData} />
              <CardInfo type={1} data={userData} />
            </>
          )}
        </SimpleGrid>
    
    </Center>
  );
};
