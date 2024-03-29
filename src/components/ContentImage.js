import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { Image, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'


export default function ContentImage(props) {
    const [toggler, setToggler] = useState(false)
    const {colorMode} = useColorMode()
  return (
    <>
    <Image as={motion.img} onClick={()=>{setToggler(!toggler)}} whileHover={{scale : 1.05, cursor : 'pointer'}} transition='0.4s' boxShadow={colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'} mx={[0, 1, 2, 'auto', 'auto', 'auto']} my={4} src={props.min} maxW={window.innerHeight > window.innerWidth ? '70%' : '45%'} maxH = {window.innerHeight > window.innerWidth ? '45%' : '100%'} alt ='Image1'></Image>
    <FsLightbox toggler={toggler} sources={[props.image]} type='image'/>
    </>
  )
}