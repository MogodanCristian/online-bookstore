
import styledComponents from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import { Add, Remove } from "@material-ui/icons"
import { Link, useLocation } from "react-router-dom"
import { mobile } from "../responsive";
import { useEffect } from "react"
import { useState } from "react"
import { publicRequest } from "../requestMethods"

const Container = styledComponents.div`

`

const Wrapper = styledComponents.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`

const ImgContainer = styledComponents.div`
    flex: 1;
`
const Image = styledComponents.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
    `
const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
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
    ${mobile({ width: "100%" })}
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
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
        <InfoContainer>
            <Title><b>Title:</b> {product.title}</Title>
            <Desc><b>Description:</b> {product.desc}</Desc>
            <Author><b>Author:</b>{product.author}</Author>
            <Publisher><b>Publisher:</b> {product.publisher}</Publisher>
            <Price><b>Price:</b> {product.price}Lei</Price>
            <AddContainer>
            <AmountContainer>
                <Remove onClick={() => handleQuantity("dec")} />
                    <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button>
                <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>ADD TO CART</Link>
            </Button>
        </AddContainer>
        </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product