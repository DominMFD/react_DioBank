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

  const interval = () => {
    setSegundos(segundos - 1);
  };
  setInterval(interval, 1000);

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

  useEffect(() => {
    const interval = () => {
        setSegundos(segundos - 1);
      };
      setInterval(interval, 1000);

      interval();

      if (segundos === 0) goToMenu();
  },)

  

  

  return (
    <Center>
      {id !== userData.id ? (
        <Text fontSize="larger" color="gray.700" fontWeight="bold">
          Usuário indisponivel você será redirecionado em {segundos}...
        </Text>
      ) : (
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {userData.name === undefined || userData.nome === null ? (
            <Center>
              <Spinner size="xl" color="gray.700" />
            </Center>
          ) : (
            <>
              <CardInfo type={0} data={userData} />
              <CardInfo type={1} data={userData} />
            </>
          )}
        </SimpleGrid>
      )}
    </Center>
  );
};
