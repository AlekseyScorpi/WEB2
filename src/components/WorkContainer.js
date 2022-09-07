import React from 'react'
import { motion } from 'framer-motion';
import { Box, Flex, Link, Heading } from '@chakra-ui/react'
import ContentImage from './ContentImage';


export default function WorkContainer(props) {
  const data = props.data;
  return (
    <Box as={motion.div} initial={{y : -50, opacity : 0}} animate={{y : 0, opacity : 1}} transition='0.7s' w='100%' h='88%' borderRadius='lg'>
      <Heading display='flex' alignItems='center' justifyContent='center' px={[0, 2, 4, 4, 4, 4]} h='15%' as='h3' fontSize={[24, 24, 24, 32, 32, 40]}><Link isExternal as={motion.a} whileHover={{scale : 1.1}} transition='0.4s' href={data.ghLink}>{data.name}</Link></Heading>
      <Flex h='70%' flexDirection={window.innerHeight > window.innerWidth ? 'column-reverse' : 'row'} alignItems='center' justifyContent='center'>
        <ContentImage image={data.image1} min={data.min1}/>
        <ContentImage image={data.image2} min={data.min2} />
      </Flex>
    </Box>
  )
}
