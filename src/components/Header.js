import React from 'react'
import {
    Box,
    Flex,
    Heading,
    useColorMode
  } from '@chakra-ui/react';
  
import { Link } from "react-router-dom";
import {ColorModeSwitcher} from './ColorModeSwitcher'

export default function Header() {
    const {colorMode} = useColorMode();

  return (
    <Box>
        <Flex justifyContent='space-between' alignItems='center' bg={colorMode === 'light' ? 'gray.200' : 'gray.700'} h='10vh'>
            <Heading as='h1' p={4} mx={8}>AlekseyScorpi</Heading>
            <Heading fontSize={32} p={4} mx={8}><Link to='WEB2'>Home</Link></Heading>
            <Heading fontSize={32} p={4} mx={8}><Link to='WEB2/about'>About</Link></Heading>
            <Heading fontSize={32} p={4} mx={8}><Link to='WEB2/works'>Works</Link></Heading>
            <ColorModeSwitcher m={4} mx={8}/>
        </Flex>
    </Box>
  )
}
