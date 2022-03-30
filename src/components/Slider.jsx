import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styledComponents from "styled-components"
import {sliderItems} from "../data"
import React, { useState } from "react";
const Container = styledComponents.div`
width: 100%;
height: 100vh;
display: flex;
background-color: teal;
position: relative;
overflow: hidden;
`

const Arrow = styledComponents.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.65;
z-index: 2;
`

const Wrapper = styledComponents.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styledComponents.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #$(props=>props.bg);
`
const ImgContainer = styledComponents.div`
height: 100%;
flex: 1;

`
const Image = styledComponents.img`
height: 80%;
`
const InfoContainer = styledComponents.div`
flex: 1;
padding: 50px;
`
const Title = styledComponents.h1`
font-size: 70px;
`

const Description = styledComponents.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;

`

const Button = styledComponents.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius: 10px;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left")
    {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2) 
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0) 
    }
  };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {
            sliderItems.map(item=>(
              <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
                <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Add to cart</Button>
            </InfoContainer>
          </Slide>
            ))
          }
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider