import React from 'react'
import { Flex, Box, Link, useColorMode } from '@chakra-ui/react'

import CustomImage from './CustomImage'




export default function Home() {
  const {colorMode} = useColorMode();
  return (
    <Flex justify='space-between' h='100%' w='100%' alignContent='center'>
      <Box fontSize={32} w='50%' display='flex' justifyContent='center' alignItems='center'>
        <Box m={6} p={2} border='8px' borderRadius={16} borderStyle='double' boxShadow={colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'}>
        Hi, Welcome to my new WebSite! I'm Aleksey aka AlekseyScorpi. Here you can see my few works and contact me in any convenient way.
        Here is my <Link href='https://teleg.run/alekseyscorpi' isExternal color={colorMode === 'light' ? 'cyan.600' : 'orange.600'}>Telegram</Link> and
         my <Link href='https://vk.com/alekseyscorpi' isExternal color={colorMode === 'light' ? 'cyan.600' : 'orange.600'}>VK</Link>.
        </Box>
      </Box>
      <Box w='50%' display='flex' justifyContent='center' alignItems='center'>
        <CustomImage colorMode={colorMode} />
      </Box>
    </Flex>
  )

}
