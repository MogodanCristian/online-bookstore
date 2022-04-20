import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'
import Badge from '@material-ui/core/Badge'
import { Link } from 'react-router-dom'
const Container = styledComponents.div`
    height: 60px;
`

const Wrapper = styledComponents.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const Left = styledComponents.div`
flex: 1;
display : flex;
align-items : center;
`
const Center = styledComponents.div`
flex: 1;
text-align : center;

`
const Right = styledComponents.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const Language = styledComponents.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styledComponents.div`
border : 0.5px solid lightgray;
display : flex;
align-items : center;
margin-left: 25px;
padding : 5px;
`
const Input = styledComponents.input`
border : none;
`
const Logo = styledComponents.h1`
font-weight: bold;
`

const MenuItem = styledComponents.button`
font-size: 14px;
cursor : pointer;
margin-left: 25px;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    Libris
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                    <Link to="/register">REGISTER</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/login">SIGN IN</Link>
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper> 
    </Container>
  )
}

export default Navbar

