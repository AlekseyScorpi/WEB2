import React from 'react'
import { motion } from 'framer-motion';
import {
    Box,
    IconButton,
    Flex,
    Heading,
    Menu,
    MenuButton,
    useColorMode,
    MenuList,
    MenuItem,
    Link,
  } from '@chakra-ui/react'; 
import { Link as RouterLink } from "react-router-dom"
import {ColorModeSwitcher} from './ColorModeSwitcher'
import {AiOutlineMenu, AiFillHome} from 'react-icons/ai'
import {SiAboutDotMe} from 'react-icons/si'
import {BiCodeAlt} from 'react-icons/bi'

export default function Header() {
    const {colorMode} = useColorMode();
  return (
    <Box>
        <Flex p={[1, 2, 4, 8, 8, 8]} justifyContent={['center', 'center', 'space-between', 'space-between', 'space-between', 'space-between']} alignItems='center' bg={colorMode === 'light' ? 'gray.200' : 'gray.700'} h='10vh'>
            <Heading as={motion.h1} fontSize={[16, 20, 24, 32, 32, 36]} initial={{x : -2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s'>AlekseyScorpi</Heading>
            <Heading as={motion.h3} initial={{x : -2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s' display={['none', 'none', 'block', 'block', 'block', 'block']} fontSize={[12, 16, 20, 28, 28, 28]}><Link as={RouterLink} to='WEB2'>Home</Link></Heading>
            <Heading as={motion.h3} initial={{x : -2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s' display={['none', 'none', 'block', 'block', 'block', 'block']} fontSize={[12, 16, 20, 28, 28, 28]}><Link as={RouterLink} to='WEB2/about'>About</Link></Heading>
            <Heading as={motion.h3} initial={{x : -2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s' display={['none', 'none', 'block', 'block', 'block', 'block']} fontSize={[12, 16, 20, 28, 28, 28]}><Link as={RouterLink} to='WEB2/works'>Works</Link></Heading>
            <Flex p={[2, 8]}>
              <Menu>
                <Box as={motion.div} initial={{x : 2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s'>
                  <MenuButton display={['flex', 'flex', 'none', 'none', 'none', 'none']} as={IconButton} icon={<AiOutlineMenu />}></MenuButton>
                </Box>
                <MenuList>
                  <MenuItem as={RouterLink} to='WEB2' display='flex' icon={<AiFillHome />}>Home</MenuItem>
                  <MenuItem as={RouterLink} to='WEB2/about' display='flex' icon={<SiAboutDotMe />}>About</MenuItem>
                  <MenuItem as={RouterLink} to='WEB2/works' display='flex' icon={<BiCodeAlt />}>Works</MenuItem>
                </MenuList>
              </Menu>
              <ColorModeSwitcher as={motion.button} initial={{x : 2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.7s'/>
            </Flex>
        </Flex>
    </Box>
  )
}
