
import styledComponents from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import { Add, Remove } from "@material-ui/icons"

const Container = styledComponents.div`

`

const Wrapper = styledComponents.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styledComponents.div`
    flex: 1;
`
const Image = styledComponents.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    `
const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styledComponents.h1`
    font-weight: 200;
`

const Desc = styledComponents.p`
    margin: 20px 0px;
`

const Author = styledComponents.p`
    margin: 20px 0px;
`
const Publisher = styledComponents.p`
    margin: 20px 0px;
`

const Price = styledComponents.span`
    font-weight: 100;
    font-size: 40px;
`

const AddContainer = styledComponents.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styledComponents.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styledComponents.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styledComponents.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.libris.ro/img/pozeprod/59/1002/F/10882982.jpg"/>
            </ImgContainer>
        <InfoContainer>
            <Title><b>Title:</b> Fratii Karamazov</Title>
            <Desc><b>Description:</b> Best book of the 19th century</Desc>
            <Author><b>Author:</b>Fyodor Dostoevsky</Author>
            <Publisher><b>Publisher:</b> Nemira</Publisher>
            <Price><b>Price:</b> 5$</Price>
            <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
        </AddContainer>
        </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product