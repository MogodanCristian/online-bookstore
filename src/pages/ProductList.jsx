import styledComponents from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive";

import Navbar from "../components/Navbar"

const Container = styledComponents.div`
`
const Title = styledComponents.h1`
  margin: 20px;
`
const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styledComponents.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styledComponents.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`
const Select = styledComponents.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`
const Option = styledComponents.option`
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Carti in limba engleza</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList