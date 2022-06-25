import { 
    Box,
    useColorMode,
    IconButton,
    Flex,
    Menu,
    MenuItem,
    Heading,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';
import { FaVk, FaTelegram, FaGithub, FaDiscord, FaViber } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';


export default function Footer() {
    const {colorMode} = useColorMode();
  return (
    <Box w='100%' bg={colorMode === 'light' ? 'gray.300' : 'gray.900'}>
        <Flex justifyContent='space-between' alignItems='center' p={4} h='10vh'>
            <IconButton as={motion.button} initial={{x : 2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s' whileHover={{scale : 1.25}} display={['none', 'none', 'flex', 'flex', 'flex', 'flex']} size='lg' onClick={() => {window.open('https://discordapp.com/users/276397420156420106/', '_blank')}} icon={<FaDiscord />} boxSize='50px'></IconButton>
            <IconButton as={motion.button} initial={{y : 200, opacity : 0}} animate={{y : 0, opacity : 1}} transition='0.7s' whileHover={{scale : 1.25}} display={['none', 'none', 'flex', 'flex', 'flex', 'flex']} size='lg' onClick={() => {window.open('https://teleg.run/alekseyscorpi', '_blank')}} icon={<FaTelegram />} boxSize='50px'></IconButton>
            <IconButton as={motion.button} initial={{y : 200, opacity : 0}} animate={{y : 0, opacity : 1}} transition='0.7s' whileHover={{scale : 1.25}} display={['none', 'none', 'flex', 'flex', 'flex', 'flex']} size='lg' onClick={() => {window.open('https://vk.com/alekseyscorpi', '_blank')}} icon={<FaVk />} boxSize='50px'></IconButton>
            <IconButton as={motion.button} initial={{y : 200, opacity : 0}} animate={{y : 0, opacity : 1}} transition='0.7s' whileHover={{scale : 1.25}} display={['none', 'none', 'flex', 'flex', 'flex', 'flex']} size='lg' onClick={() => {window.open('https://github.com/AlekseyScorpi', '_blank')}} icon={<FaGithub />} boxSize='50px'></IconButton>
            <IconButton as={motion.button} initial={{x : -2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s' whileHover={{scale : 1.25}} display={['none', 'none', 'flex', 'flex', 'flex', 'flex']} size='lg' onClick={() => {window.open('https://viber.click/79607254824', '_blank')}} icon={<FaViber />} boxSize='50px'></IconButton>
            <Flex alignItems='center' w='100%' justifyContent='center' display={['flex', 'flex', 'none', 'none', 'none', 'none']}>
              <Heading mx={[1, 2, 8]} fontSize={[12, 20, 24]} as={motion.h3} initial={{x : -1000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s'>My contacts</Heading>
              <Menu>
                <Box as={motion.div} initial={{x : -1000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s'>
                  <MenuButton mx={[1, 2, 8]} as={IconButton} icon={<AiOutlineMenu />}></MenuButton>
                </Box>
                  <MenuList>
                    <MenuItem icon={<FaTelegram />} onClick={() => {window.open('https://teleg.run/alekseyscorpi', '_blank')}}>Telegram</MenuItem>
                    <MenuItem icon={<FaVk />} onClick={() => {window.open('https://vk.com/alekseyscorpi', '_blank')}}>VK</MenuItem>
                    <MenuItem icon={<FaGithub />} onClick={() => {window.open('https://github.com/AlekseyScorpi', '_blank')}}>GitHub</MenuItem>
                    <MenuItem icon={<FaDiscord />} onClick={() => {window.open('https://discordapp.com/users/276397420156420106/', '_blank')}}>Discord</MenuItem>
                    <MenuItem icon={<FaViber />} onClick={() => {window.open('https://viber.click/79607254824', '_blank')}}>Viber</MenuItem>
                  </MenuList>
              </Menu>
            </Flex>
        </Flex>
        
    </Box>
  )
}
