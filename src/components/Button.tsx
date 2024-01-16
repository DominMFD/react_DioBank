import { Button, ChakraProvider, background } from "@chakra-ui/react";

interface IButton {
  title: string,
  event: () => void
}

export const Botao = ({ title, event }: IButton) => {
  
  return (
    <ChakraProvider>
    <Button
      onClick={event}
      backgroundColor={'#52b788'}
      _hover={{backgroundColor: '#2d6a4f'}}
      size="sm"
      width="100%"
      marginTop="5px"
      title={title}
    >
      {title}
    </Button>
  </ChakraProvider>
  )
};
