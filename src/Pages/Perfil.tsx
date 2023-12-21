import { useEffect, useState } from "react";
import { IUserData } from "../Interfaces/IUserData";
import { api } from "../api";
import { ProfileCard } from "../components/ProfileCard";
import { Center } from "@chakra-ui/react";

export const  Perfil = () => {
    const [userData, setUserData] = useState<any | IUserData>("");

    useEffect(() => {
        const getData = async () => {
          const data = await api;
          setUserData(data);
        };
    
        getData();
      });

      return (
        <Center>
            <ProfileCard data={userData} />
        </Center>
        
      )
}