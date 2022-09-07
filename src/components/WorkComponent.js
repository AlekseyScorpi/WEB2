import { Button, Box, Flex } from '@chakra-ui/react'
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import WorkContainer from './WorkContainer'
import fish1 from '../images/fish1.png'
import fish2 from '../images/fish2.png'
import site1 from '../images/site1.png'
import site2 from '../images/site2.png'
import star1 from '../images/star1.png'
import star2 from '../images/star2.png'
import frac1 from '../images/frac1.png'
import frac2 from '../images/frac2.png'
import fish1min from '../images/fish1-min.png'
import fish2min from '../images/fish2-min.png'
import site1min from '../images/site1-min.png'
import site2min from '../images/site2-min.png'
import star1min from '../images/star1-min.png'
import star2min from '../images/star2-min.png'
import frac1min from '../images/frac1-min.png'
import frac2min from '../images/frac2-min.png'




const contentArray = [
    {name : 'AquariumFish', image1 : fish1, image2 : fish2, ghLink : 'https://github.com/AlekseyScorpi/AqariumFish', min1 : fish1min, min2 : fish2min},
    {name : 'First Portfolio', image1 : site1, image2 : site2, ghLink : 'https://github.com/AlekseyScorpi/firstPorfolio', min1 : site1min, min2 : site2min},
    {name : 'A* PathFinder', image1 : star1, image2 : star2, ghLink : 'https://github.com/AlekseyScorpi/oop5', min1 : star1min, min2 : star2min},
    {name : 'Fractal Generator', image1 : frac1, image2 : frac2, ghLink : 'https://github.com/AlekseyScorpi/oop8', min1 : frac1min, min2 : frac2min}
]


export default function WorkComponent() {
    const [index, setIndex] = useState(0)
  return (
    <Box w='100%' h='80vh' alignItems='center' justifyContent='center' margin = 'auto'>
        <WorkContainer data={contentArray[index]}/>
        <Flex justifyContent='space-evenly'>
          <Button as={motion.button} initial={{y : 30, opacity : 0}} animate={{y : 0, opacity : 1}} transition='0.7s' whileHover={{scale : 1.08}} fontSize={[10, 14, 16, 20, 24, 28]} w = '15%' onClick={() =>{index === 0 ? setIndex(3) : setIndex(index - 1)}}>
              Previous
          </Button>
          <Button as={motion.button} initial={{y : 30, opacity : 0}} animate={{y : 0, opacity : 1}} transition='0.7s' whileHover={{scale : 1.08}} fontSize={[10, 14, 16, 20, 24, 28]} w = '15%' onClick={() =>{index === 3 ? setIndex(0) : setIndex(index + 1)}}>
              Next
          </Button>
        </Flex>
    </Box>
  )
}

