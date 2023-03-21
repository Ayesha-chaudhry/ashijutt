import React from "react";
import Cards from "./components/Card";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <Cards />
    </ChakraProvider>
  );
}

export default App;
