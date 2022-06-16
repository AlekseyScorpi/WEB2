import React from "react";
import {
    Box,
    Flex,
    Heading,
    useColorMode,
    IconButton
  } from '@chakra-ui/react';

import { FaHome, FaPhoneAlt, FaInfo, FaLaptopCode } from "react-icons/fa";
import { ColorModeSwitcher } from "./ColorModeSwitcher";


const Header = () => {
    const { colorMode } = useColorMode();
    return(
        <Box as="Header">
                <Flex p={4} justifyContent="space-between" alignItems="center" bg={colorMode === 'light' ? 'gray.300' : 'gray.700'} height='80px'>
                    <IconButton icon={<FaHome />} boxSize='50px' size='lg' colorScheme='gray' />
                    <Heading as='h1'>Welcome to my new page about me</Heading>
                    <IconButton icon={<FaInfo />} boxSize='50px' size='lg' colorScheme='gray' />
                    <IconButton icon={<FaLaptopCode />} boxSize='50px' size='lg' colorScheme='gray' />
                    <IconButton icon={<FaPhoneAlt />} boxSize='50px' size='lg' colorScheme='gray' />
                    <ColorModeSwitcher />
                </Flex>
        </Box>
    )
}

export {Header}