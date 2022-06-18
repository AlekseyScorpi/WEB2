import { 
    Box,
    useColorMode,
    IconButton,
    Flex
} from '@chakra-ui/react'
import React from 'react'
import { FaVk, FaTelegram, FaGithub, FaDiscord, FaViber } from 'react-icons/fa';


function openNewWindow(icon){
  console.log('Клик');
  window.open('https://vk.com/alekseyscorpi', '_blank');
}

export default function Footer() {
    const {colorMode} = useColorMode();
  return (
    <Box w='100%' bg={colorMode === 'light' ? 'gray.300' : 'gray.900'}>
        <Flex justifyContent='space-between' alignItems='center' p={4} h='10vh'>
            <IconButton size='lg' onClick={() => {window.open('https://discordapp.com/users/276397420156420106/', '_blank')}} icon={<FaDiscord />} boxSize='50px'></IconButton>
            <IconButton size='lg' onClick={() => {window.open('https://teleg.run/alekseyscorpi', '_blank')}} icon={<FaTelegram />} boxSize='50px'></IconButton>
            <IconButton size='lg' onClick={() => {window.open('https://vk.com/alekseyscorpi', '_blank')}} icon={<FaVk />} boxSize='50px'></IconButton>
            <IconButton size='lg' onClick={() => {window.open('https://github.com/AlekseyScorpi', '_blank')}} icon={<FaGithub />} boxSize='50px'></IconButton>
            <IconButton size='lg' onClick={() => {window.open('https://viber.click/79607254824', '_blank')}} icon={<FaViber />} boxSize='50px'></IconButton>
        </Flex>
        
    </Box>
  )
}
