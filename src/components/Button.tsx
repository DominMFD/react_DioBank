import { Button, ChakraProvider } from "@chakra-ui/react";

interface IButton {
  title: string,
  event: () => void
}

export const Botao = ({ title, event }: IButton) => {
  
  return (
    <ChakraProvider>
    <Button
      onClick={event}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      {title}
    </Button>
  </ChakraProvider>
  )
};
