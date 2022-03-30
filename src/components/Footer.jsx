import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    display: flex;
`

const Left = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styledComponents.h1``

const Desc = styledComponents.p`
    margin: 20px 0px;    
`

const SocialContainer = styledComponents.div`
    display: flex;
`

const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color}
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styledComponents.div`
    flex: 1;
    padding: 20px;
`

const Title = styledComponents.h3`
    margin-bottom: 30px;
`

const List = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styledComponents.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styledComponents.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styledComponents.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Libris</Logo>
            <Desc>We know books</Desc>
            <SocialContainer>
            <SocialIcon color='3B5999'>
                <Facebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Instagram/>
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <Twitter/>
            </SocialIcon>
            <SocialIcon color='E60023'>
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms and conditions</ListItem>
                <ListItem>Order tracking</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>Bulevardul George Coşbuc nr. 39-49, Sector 5, BUCUREȘTI, Cod poștal 050141</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>(+40) 21 335 46 68)</ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@libris.ro</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer