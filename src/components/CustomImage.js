import React, { Component } from 'react'
import { Image } from '@chakra-ui/react';
import me0 from '../images/me0.png'
import me1 from '../images/me1.jpg'
import me2 from '../images/me2.png'
import { motion } from 'framer-motion';


export default class CustomImage extends Component {



    constructor(props){
        super(props);
        this.state = {
            index : 0,
            colorMode : props.colorMode,
            imagesArray : [me0, me1, me2]
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          5000
        );
      }

    tick() {
        if (this.state.index < 2){
            this.setState({index : this.state.index + 1});
        }else{
            this.setState({index : 0})
        }
    }   

  render() {
    return (
      <Image as={motion.img} initial={{x : 2000, opacity : 0}} animate={{x : 0, opacity : 1}} transition='0.4s' maxH='100%' m={8} objectFit='cover' boxShadow={this.colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'} border='4px' borderColor={this.colorMode === 'light' ? 'gray.900' : 'gray.700'} src={this.state.imagesArray[this.state.index]} boxSize={['150px', '250px', '325px', '350px', '400px', '400px']} borderRadius='full'/>
    )
  }
}
