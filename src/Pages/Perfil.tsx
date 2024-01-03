import { useContext, useEffect, useState } from "react";
import { IUserData } from "../Interfaces/IUserData";
import { ProfileCard } from "../components/ProfileCard";
import { Center } from "@chakra-ui/react";
import { AppContext } from "../components/AppContext";

export const  Perfil = () => {
    const [userData, setUserData] = useState<any | IUserData>("");
    const { user } = useContext(AppContext)

    useEffect(() => {
        const getData = async () => {
          const data = user
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