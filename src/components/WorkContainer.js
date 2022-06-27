import React from 'react'
import { motion } from 'framer-motion';
import { Box, Flex, Link, Heading } from '@chakra-ui/react'
import ContentImage from './ContentImage';


export default function WorkContainer(props) {
  const data = props.data;
  return (
    <Box as={motion.div} initial={{y : 2000, opacity : 0}} animate={{y : 0, opacity : 1}} transition='0.5s' w='80%' h='95%' borderStyle='dashed' border={['0px', '1px', '2px', '4px', '4px', '4px']} textAlign='center' borderRadius='lg'>
        <Heading display='flex' alignItems='center' justifyContent='center' my={2} px={[0, 2, 4, 4, 4, 4]} h='15%' as='h3' fontSize={[16, 20, 24, 28, 32, 40]}><Link isExternal as={motion.a} whileHover={{scale : 1.1}} transition='0.4s' href={data.ghLink}>{data.name}</Link></Heading>
        <Flex h='70%' flexDirection={['column', 'column', 'column', 'row', 'row', 'row']} alignItems='center' justify='center'>
          <ContentImage image={data.image1} min={data.min1}/>
          <ContentImage image={data.image2} min={data.min2} />
        </Flex>
    </Box>
  )
}
