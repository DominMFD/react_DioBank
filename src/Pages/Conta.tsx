import { useEffect, useState } from "react";
import { instance } from "../api";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { IUserData } from "../Interfaces/IUserData";
import { useNavigate, useParams } from "react-router-dom";

export const Conta = () => {
  const [userData, setUserData] = useState<any | IUserData>("");
  const { id } = useParams();
  const navigate = useNavigate();

 

  useEffect(() => {
    const getData = async () => {
      const data = await instance.get(`/user/oie@hotmail.com.br`)
      .then(response => {
        return response.data
      });
      setUserData(data);
    };

    getData();
  });

  if(userData && userData.userId !== id) {  
    navigate('/')
  }


  return (
    <Center>
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
          )  
          }
        </SimpleGrid>
    
    </Center>
  );
};
