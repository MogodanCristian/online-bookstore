import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'
import Badge from '@material-ui/core/Badge'
import { Link } from 'react-router-dom'
import { mobile } from "../responsive";

const Container = styledComponents.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styledComponents.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    ${mobile({ padding: "10px 0px" })}
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
${mobile({ flex: 2, justifyContent: "center" })}
`
const Language = styledComponents.select`
font-size: 14px;
cursor: pointer;
padding: 10px;
margin-right: 20px;
${mobile({ display: "none" })}
`
const Option = styledComponents.option`
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
${mobile({ width: "50px" })}
`
const Logo = styledComponents.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`

const MenuItem = styledComponents.button`
font-size: 14px;
cursor : pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    <Option selected>English</Option>
                    <Option>Romana</Option>
                    <Option>Deutsch</Option>
                    <Option>Francais</Option>
                </Language>
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
                    <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>REGISTER</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>SIGN IN</Link>
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <a href='/cart' style={{color:"white"}}>
                        <ShoppingCartOutlined/>
                    </a>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper> 
    </Container>
  )
}

export default Navbar

