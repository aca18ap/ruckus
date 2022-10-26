import React, {Component, useEffect} from 'react'
import Navigation from './Nav.js'
import { useState } from 'react'
import axios from 'axios'
import ProductsGrid from './Products/ProductsGrid'

function ProductsApp() {

    let [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('api/v1/products/index')
        .then(res => {
            setProducts(res.data)
        })
    }, [])
    return(
        <div>
            <Navigation/>
            
            <ProductsGrid products={products}/>

        </div>
    )
    
}

export default ProductsApp