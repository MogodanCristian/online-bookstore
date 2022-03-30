import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    flex: 1;
    margin-top: 100px;
    margin-right: 3px;
    position: relative;
`
const Info = styledComponents.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styledComponents.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styledComponents.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem