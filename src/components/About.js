import React from 'react'
import { Flex, Box, Image, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import chairL from '../images/chair.png'
import chairD from '../images/chair_d.png'


export default function About() {
  const {colorMode} = useColorMode();
  return (
    <Flex  flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row', 'row']} justifyContent={['center', 'center', 'center', 'space-between', 'space-between', 'space-between']} h='100%'>
      <Box as={motion.div} initial={{x : -2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.4s' fontSize={[12, 16, 20, 22, 24, 28]} w='100%' display='flex' justifyContent='center' alignItems='center' maxH={['50%', '50%', '50%', '100%', '100%', '100%']}>
        <Box m={6} p={2} border='8px' borderRadius={16} borderStyle='double' boxShadow={colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'} maxH='100%' overflow='auto'>
        Hello EVERYONE! I'm Aleksey Timoshin a beginner developer. Now I study at the MTUCI. <span style={{fontWeight : 'bold'}}>I have a little <span style={{color : '#00CC00'}}>Python3</span>, <span style={{color : '#4186D3'}}>C++</span>, <span style={{color : (colorMode === 'light' ? '#7608AA' : '#DF004F')}}>C#</span>, <span style={{color : '#FF4900'}}>Java</span>, <span style={{color : '#FF6C00'}}>HTML</span>/<span style={{color : '#707ED7'}}>CSS</span> + <span style={{color : '#FFD300'}}>JS</span>(jQuery), <span style={{color : '#37B6CE'}}>React</span> experience.</span> Although my skills are not that great, I always like to learn something new and useful. My dream is to develop games, but in the meantime, you can look at this "gorgeous" site made by me on React, as well as evaluate my other works on the "Works" tab. My main contacts are at the bottom of the site, so if you are interested in something, feel free to write me ;)
        </Box>
      </Box>
      <Box maxH={['50%', '50%', '50%', '100%', '100%', '100%']} w='100%' display='flex' justifyContent='center' alignItems='center'>
        <Image as={motion.img} initial={{x : 2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.4s' display={colorMode === 'light' ? 'block' : 'none'} maxH='100%' src={chairL} boxSize={['100%', '300px', '375px', '450px', '525px', '600px']} />
        <Image as={motion.img} initial={{x : 2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.4s' display={colorMode === 'dark' ? 'block' : 'none'} maxH='100%' src={chairD} boxSize={['100%', '300px', '375px', '450px', '525px', '600px']} />
      </Box>
    </Flex>
  )
}
