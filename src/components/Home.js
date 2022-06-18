import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'

import testJPEG from '../images/test.jpeg'

export default function Home() {
  return (
    <Flex justify='space-between' h='100%' alignContent='center'>
      <Box m={8}>
        asdasdasdasdasdas
      </Box>
      <Image align boxSize={['300px', '300px', '300px', '400px','500px']} src={testJPEG} borderRadius='full' m={8}>
      </Image>
    </Flex>
  )
}
