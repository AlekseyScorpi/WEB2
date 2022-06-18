import React from 'react'
import { Flex, Box, Image, Link, useColorMode } from '@chakra-ui/react'

import testJPEG from '../images/test.jpeg'

export default function Home() {
  const {colorMode} = useColorMode();
  return (
    <Flex justify='space-between' h='100%' w='100%' alignContent='center'>
      <Box fontSize={32} w='50%' display='flex' justifyContent='center' alignItems='center'>
        <Box m={6} p={2} border='8px' borderRadius={16} borderStyle='double'>
        Hi, Welcome to my new WebSite! I'm Aleksey aka AlekseyScorpi. Here you can see my few works and contact me in any convenient way.
        Here is my <Link href='https://teleg.run/alekseyscorpi' isExternal color={colorMode === 'light' ? 'cyan.600' : 'orange.600'}>Telegram</Link> and
         my <Link href='https://vk.com/alekseyscorpi' isExternal color={colorMode === 'light' ? 'cyan.600' : 'orange.600'}>VK</Link>.
        </Box>
      </Box>
      <Box w='50%' display='flex' justifyContent='center' alignItems='center'>
        <Image border='4px' borderColor={colorMode === 'light' ? 'gray.900' : 'gray.700'} src={testJPEG} boxSize='400px' borderRadius='full' />
      </Box>
    </Flex>
  )
}
