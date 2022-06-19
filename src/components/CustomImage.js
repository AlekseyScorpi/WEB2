import React, { Component } from 'react'
import { Image } from '@chakra-ui/react';
import testJPEG from '../images/test.jpeg'
import me1 from '../images/me1.jpg'
import testJPG from '../images/test2.jpg'



export default class CustomImage extends Component {



    constructor(props){
        super(props);
        this.state = {
            index : 0,
            colorMode : props.colorMode,
            imagesArray : [testJPEG, me1, testJPG]
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
        <Image boxShadow={this.colorMode === 'light' ? '0px 0px 10px black' : '0px 0px 10px red'} border='4px' borderColor={this.colorMode === 'light' ? 'gray.900' : 'gray.700'} src={this.state.imagesArray[this.state.index]} boxSize={['300px', '300px', '300px', '350px', '400px', '400px']} borderRadius='full' />
    )
  }
}
