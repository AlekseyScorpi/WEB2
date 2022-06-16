import React from "react";
import {
    Box,
    Heading,
    useColorMode,
    Image
  } from '@chakra-ui/react';
const Footer = () => {
    const {colorMode} = useColorMode();
    return(
        <Box h="60px" w = "100%" bg={colorMode === 'light' ? 'gray.400' : "gray.700"}>
            <Heading as='h3' textAlign='center'>2022 ALL RIGHTS RESERVED ©</Heading>
        </Box>
    )
}

export {Footer}