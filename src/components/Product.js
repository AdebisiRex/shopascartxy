import React from 'react'
import {Route, Routes} from "react-router-dom"
import ProductDetails from './ProductDetails'
 
const Product = () => {
  return (
    <>
    <h1>Products</h1>
    <Routes>
        <Route path="/details" element={<ProductDetails/>}/>

    </Routes>
    </>
  )
}

export default Product