import React from 'react'
import { motion } from 'framer-motion';
import { Flex, Box, Link, useColorMode } from '@chakra-ui/react'

import CustomImage from './CustomImage'




export default function Home() {
  const {colorMode} = useColorMode();
  return (
    <Flex  flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row', 'row']} justifyContent={['center', 'center', 'center', 'space-between', 'space-between', 'space-between']} h='100%'>
      <Box as={motion.div} initial={{x : -2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.4s' fontSize={[20, 24, 28, 32, 32, 32]} w='100%' display='flex' justifyContent='center' alignItems='center' maxH={['40%', '40%', '40%', '100%', '100%', '100%']}>
        <Box maxH='100%' m={6} p={2} border='8px' borderRadius={16} borderStyle='double' boxShadow={colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'} overflow='auto  '>
        Hi, Welcome to my new WebSite! I'm Aleksey aka AlekseyScorpi. Here you can see my few works and contact me in any convenient way.
        Here is my <Link href='https://teleg.run/alekseyscorpi' isExternal color={colorMode === 'light' ? 'cyan.600' : 'orange.600'}>Telegram</Link> and
         my <Link href='https://vk.com/alekseyscorpi' isExternal color={colorMode === 'light' ? 'cyan.600' : 'orange.600'}>VK</Link>.
        </Box>
      </Box>
      <Box maxH={['50%', '50%', '50%', '100%', '100%', '100%']} w='100%' display='flex' justifyContent='center' alignItems='center'>
        <CustomImage colorMode={colorMode} />
      </Box>
    </Flex>
  )

}
