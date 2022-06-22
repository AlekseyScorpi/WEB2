import React from 'react'
import { Box, Flex, Image, Link, Heading } from '@chakra-ui/react'

export default function WorkContainer(props) {
    
    const data = props.data;
  return (
    <Box w='80%' h='95%' borderStyle='dashed' border={['0px', '1px', '2px', '4px', '4px', '4px']} textAlign='center' borderRadius='lg'>
        <Heading my={2} px={[0, 2, 4, 4, 4, 4]} h='15%' as='h3' fontSize={[12, 14, 22, 28, 30, 32]}>{data.name}</Heading>
        <Flex h='70%' flexDirection={['column', 'column', 'column', 'row', 'row', 'row']} alignItems='center' justify='center'>
            <Image mx={[0, 1, 2, 'auto', 'auto', 'auto']} my={4} p={1} src={data.image1} maxW={['70%', '70%', '70%', '45%', '45%', '45%']} maxH = {['45%', '45%', '45%', '100%', '100%', '100%']} alt ='Image1' borderRadius='2xl' border={['4px', '2px', '2px', '2px', '2px', '2px']}></Image>
            <Image mx={[0, 1, 2, 'auto', 'auto', 'auto']} my={4} p={1} src={data.image2} maxW={['70%', '70%', '70%', '45%', '45%', '45%']} maxH = {['45%', '45%', '45%', '100%', '100%', '100%']} alt ='Image2' borderRadius='2xl' border={['4px', '2px', '2px', '2px', '2px', '2px']}></Image>
        </Flex>
        <Link my={2} w='100%' h='15%' fontSize={[8, 12, 16, 20, 22, 24]} href={data.ghLink} isExternal>{data.ghLink}</Link>
    </Box>
  )
}
