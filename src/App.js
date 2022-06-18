import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import Header from "./components/Header"
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import ContentBody from './components/ContentBody';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <ContentBody />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
