import React from "react";
import {
    Box,
    useColorMode,
  } from '@chakra-ui/react';

const ContentBody = () => {
    const { colorMode } = useColorMode();
    return(
        <Box h='2000px' w='100%' bg={colorMode === 'light' ? 'gray.100' : "gray.800"}>

        </Box>
    )
}

export {ContentBody}