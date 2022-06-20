import React from 'react'
import { Box, Flex, Image, Link, Heading } from '@chakra-ui/react'
export default function WorkContainer(props) {
    
    const data = props.data;
  return (
    <Box w='100%' h='100%' m={16} borderStyle='dashed' border='4px' textAlign='center' justifyContent='center' borderRadius='lg'>
        <Heading h='15%' as='h3' p={4}>{data.name}</Heading>
        <Flex h='70%' flexDirection={['column', 'column', 'column', 'row', 'row', 'row']} justify='center'>
            <Image m='auto' my={4} p={1} src={data.image1} w={['80%', '80%', '80%', '45%', '45%', '45%']} alt ='Image1' borderRadius='2xl' border='4px'></Image>
            <Image m='auto' my={4} p={1} src={data.image2} w={['80%', '80%', '80%', '45%', '45%', '45%']} alt ='Image2' borderRadius='2xl' border='4px'></Image>
        </Flex>
        <Link h='15%' m={4} p={4} fontSize={24} href={data.ghLink} isExternal>{data.ghLink}</Link>
    </Box>
  )
}
