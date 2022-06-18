import { 
    Box,
    useColorMode,
    IconButton,
    Flex
} from '@chakra-ui/react'
import React from 'react'
import { FaVk, FaTelegram, FaGithub, FaDiscord, FaViber } from 'react-icons/fa';

export default function Footer() {
    const {colorMode} = useColorMode();
  return (
    <Box w='100%' bg={colorMode === 'light' ? 'gray.300' : 'gray.900'}>
        <Flex justifyContent='space-between' alignItems='center' p={4} h='10vh'>
            <IconButton size='lg' icon={<FaDiscord />} boxSize='50px'></IconButton>
            <IconButton size='lg' icon={<FaTelegram />} boxSize='50px'></IconButton>
            <IconButton size='lg' icon={<FaVk />} boxSize='50px'></IconButton>
            <IconButton size='lg' icon={<FaGithub />} boxSize='50px'></IconButton>
            <IconButton size='lg' icon={<FaViber />} boxSize='50px'></IconButton>
        </Flex>
        
    </Box>
  )
}
