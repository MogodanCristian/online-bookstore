import styledComponents from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive";

import Navbar from "../components/Navbar"
import { useLocation } from "react-router-dom"
import { useState } from "react"

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
  const location = useLocation();
  
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{(cat.charAt(0).toUpperCase() + cat.slice(1)).replace("_"," ")}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList