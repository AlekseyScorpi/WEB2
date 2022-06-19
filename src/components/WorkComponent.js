import { Button, Flex } from '@chakra-ui/react'
import React, { Component } from 'react'
import WorkContainer from './WorkContainer'
import fish1 from '../images/fish1.png'
import fish2 from '../images/fish2.png'


const contentArray = [
    {name : 'AquariumFish', image1 : fish1, image2 : fish2, ghLink : 'https://github.com/AlekseyScorpi/AqariumFish'},
    {name : 'Fractal', image1 : fish1, image2 : fish2, ghLink : 'https://github.com/AlekseyScorpi/AqariumFish'},
    {name : 'Fractal1', image1 : fish1, image2 : fish2, ghLink : 'https://github.com/AlekseyScorpi/AqariumFish'},
    {name : 'Fractal2', image1 : fish1, image2 : fish2, ghLink : 'https://github.com/AlekseyScorpi/AqariumFish'}
]

export default class WorkComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            index : 0
        }
    }


  render() {
    //console.log(contentArray[this.state.index]);
    return (
        <Flex h='100%' alignItems='center' justify='space-between' p={12}>
            <Button onClick={() =>{
                if (this.state.index > 0){
                    this.setState({index : this.state.index - 1});
                }else{
                    this.setState({index : 3});
                }
            }}>
                Previous
            </Button>
            <WorkContainer data={contentArray[this.state.index]} />
            <Button onClick={() =>{
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
