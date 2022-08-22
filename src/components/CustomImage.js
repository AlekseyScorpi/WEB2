import React, { useState } from 'react'
import { Image } from '@chakra-ui/react';
import me0 from '../images/me0.png'
import me1 from '../images/me1.jpg'
import me2 from '../images/me2.png'
import { motion } from 'framer-motion';


const imagesArray = [me0, me1, me2]

export default function CustomImage(props) {
  const [index, setIndex] = useState(0)
  setTimeout(()=>{index === 2 ? setIndex(0) : setIndex(index + 1)}, 5000)
  return (
    <Image as={motion.img} initial={{x : 2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.4s' maxH='100%' m={8} objectFit='cover' boxShadow={props.colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'} border='4px' borderColor={props.colorMode === 'light' ? 'gray.900' : 'gray.700'} src={imagesArray[index]} boxSize={['150px', '250px', '325px', '350px', '400px', '400px']} borderRadius='full'/>
  )
}
