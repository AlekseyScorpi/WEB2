import { Button, Flex } from '@chakra-ui/react'
import React, { Component } from 'react'
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

export default class WorkComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            index : 0,
        }
    }


  render() {
    return (
        <Flex w='100%' h='80vh' alignItems='center' justify='center' >
            <Button fontSize={[8, 10, 12, 14, 16, 18]} m={[0, 1, 2, 2, 2, 2]} w='10%' onClick={() =>{
                if (this.state.index > 0){
                    this.setState({index : this.state.index - 1});
                }else{
                    this.setState({index : 3});
                }
            }}>
                Previous
            </Button>
            <WorkContainer data={contentArray[this.state.index]}/>
            <Button fontSize={[8, 10, 12, 14, 16, 18]} m={[0, 1, 2, 2, 2, 2]} w='10%' onClick={() =>{
                if (this.state.index < 3){
                    this.setState({index : this.state.index + 1});
                }else{
                    this.setState({index : 0});
                }
            }}>
                Next
            </Button>
        </Flex>
    )
  }
}
