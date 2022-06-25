import React from 'react'
import { motion } from 'framer-motion';
import { Box, Flex, Image, Link, Heading, useColorMode } from '@chakra-ui/react'


export default function WorkContainer(props) {

  const {colorMode} = useColorMode();
  const data = props.data;
  return (
    <Box as={motion.div} initial={{y : 2000, opacity : 0}} animate={{y : 0, opacity : 1}} transition='0.5s' w='80%' h='95%' borderStyle='dashed' border={['0px', '1px', '2px', '4px', '4px', '4px']} textAlign='center' borderRadius='lg'>
        <Heading display='flex' alignItems='center' justifyContent='center' my={2} px={[0, 2, 4, 4, 4, 4]} h='15%' as='h3' fontSize={[16, 20, 24, 28, 32, 40]}><Link isExternal as={motion.a} whileHover={{scale : 1.1}} transition='0.4s' href={data.ghLink}>{data.name}</Link></Heading>
        <Flex h='70%' flexDirection={['column', 'column', 'column', 'row', 'row', 'row']} alignItems='center' justify='center'>
            <Image as={motion.img} onClick={()=>{window.open(data.image1, '_blank')}} whileHover={{scale : 1.05, cursor : 'pointer'}} transition='0.4s' boxShadow={colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'} mx={[0, 1, 2, 'auto', 'auto', 'auto']} my={4} src={data.min1} maxW={['70%', '70%', '70%', '45%', '45%', '45%']} maxH = {['45%', '45%', '45%', '100%', '100%', '100%']} alt ='Image1' borderRadius='base' border={{base : '2px', sm : '0px'}}></Image>
            <Image as={motion.img} onClick={()=>{window.open(data.image2, '_blank')}} whileHover={{scale : 1.05, cursor : 'pointer'}} transition='0.4s' boxShadow={colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'} mx={[0, 1, 2, 'auto', 'auto', 'auto']} my={4} src={data.min2} maxW={['70%', '70%', '70%', '45%', '45%', '45%']} maxH = {['45%', '45%', '45%', '100%', '100%', '100%']} alt ='Image2' borderRadius='base' border={{base : '2px', sm : '0px'}}></Image>
        </Flex>
    </Box>
  )
}
