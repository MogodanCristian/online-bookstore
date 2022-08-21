import { useEffect, useState } from 'react'
import styledComponents from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Container = styledComponents.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat,sort}) => {
  const location = useLocation();

  const [products, setProducts]= useState([]);
  useEffect(()=>{
    const getProducts = async() =>{
      try{
        const res = await axios.get( cat
          ? "http://localhost:5000/api/products?category=".concat(cat)
          : "http://localhost:5000/api/products");
        console.log(res.data);
        setProducts(res.data);
      }
      catch(err){}
    };
    getProducts()
  },[cat]);

  useEffect(() => {
    if (sort === "newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
        {products.map(item =>(
          <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}


export default Products