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
      backgroundColor={'#2d6a4f'}
      _hover={{backgroundColor: '#1b4332'}}
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
