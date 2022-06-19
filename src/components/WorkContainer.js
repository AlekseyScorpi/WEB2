import React from 'react'
import { Box, Flex, Image, Link, Heading } from '@chakra-ui/react'
export default function WorkContainer(props) {
    
    const data = props.data;
    console.log(data);
  return (
    <Box w='100%' h='100%' m={16} borderStyle='dashed' border='4px' textAlign='center' borderRadius='lg' overflow='hidden'>
        <Heading as='h3' p={4}>{data.name}</Heading>
        <Flex justify='space-between'>
            <Image m={4} p={1} src={data.image1} w='45%' alt ='Image1' borderRadius='2xl' border='4px'></Image>
            <Image m={4} p={1} src={data.image2} w='45%' alt ='Image2' borderRadius='2xl' border='4px'></Image>
        </Flex>
        <Link fontSize={24} href={data.ghLink} isExternal>{data.ghLink}</Link>
    </Box>
  )
}
