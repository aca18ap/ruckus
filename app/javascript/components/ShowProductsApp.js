import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './Nav'
import axios from 'axios'


function ShowProductsApp(){
    const params = useParams()
    const id = params.id
    const [product, setProduct] = useState({})
    useEffect(()=>{
        let url = 'api/v1/products/' + id
        axios.get(url)
        .then(res => {
            setProduct(res.data)
        })
    }, [])
    return (
        <div>
            <Nav/>
            <h1>{product.name}</h1>
        </div>
    )
}

export default ShowProductsApp