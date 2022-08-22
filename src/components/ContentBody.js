import React from 'react'
import { Route, Routes } from "react-router-dom";
import {
    Box,
    useColorMode
  } from '@chakra-ui/react';

import Home from './Home';
import About from './About';
import WorkComponent from './WorkComponent';


export default function ContentBody() {
    const {colorMode} = useColorMode();
  return (
    <Box w='100%' h='80vh' bg={colorMode === 'light' ? 'gray.50' : 'gray.600'}>
      <Routes>
        <Route path='WEB2' element={<Home />} />
        <Route path='WEB2/about' element={<About />} />
        <Route path='WEB2/works' element={<WorkComponent />} />
      </Routes>
    </Box>
  )
}
