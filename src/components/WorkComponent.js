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



const contentArray = [
    {name : 'AquariumFish', image1 : fish1, image2 : fish2, ghLink : 'https://github.com/AlekseyScorpi/AqariumFish'},
    {name : 'First Portfolio', image1 : site1, image2 : site2, ghLink : 'https://github.com/AlekseyScorpi/firstPorfolio'},
    {name : 'A* PathFinder', image1 : star1, image2 : star2, ghLink : 'https://github.com/AlekseyScorpi/oop5'},
    {name : 'Fractal Generator', image1 : frac1, image2 : frac2, ghLink : 'https://github.com/AlekseyScorpi/oop8'}
]

export default class WorkComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            index : 0
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
