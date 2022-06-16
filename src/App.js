import React from 'react';
import {
  ChakraProvider,
  //extendTheme,
  theme
} from '@chakra-ui/react';
import {Header} from "./components/Header"
import {ContentBody} from "./components/ContentBody"
import {Footer} from "./components/Footer"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <ContentBody />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
