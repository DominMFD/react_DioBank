
import { IUserData } from "../Interfaces/IUserData";
import { ProfileCard } from "../components/ProfileCard";
import { Center } from "@chakra-ui/react";

interface IPerfil {
  data: IUserData
}

export const  Perfil = ({data}: IPerfil) => {

      return (
        <Center>
            <ProfileCard data={data} />
        </Center>
        
      )
}