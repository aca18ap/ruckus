import { hasData } from 'jquery';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ProductDataModal({action, newProductModal, editProductModal, modalTemplate}){

    let [msg, setMsg] = useState("")
    

    const [productData, setProductData] = useState({})
    useEffect(()=>{
        console.log('setting')
        console.log(modalTemplate)
        setProductData(modalTemplate)
    }, [])


    function handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        setProductData({...productData, [key]: value})
    }

    function handleSubmit(e){
        let url = 'api/v1/products/create'
        let method = 'post'
        if(action == 'edit'){
            url = 'api/v1/products/'+ productData.id
            method = 'patch'
        }
        
        e.preventDefault();
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios({
            method: method,
            url: url,
            type: 'application/json',
            data: {product: {
                name: productData.name,
                brand: productData.brand,
                size: productData.size,
                description: productData.description,
                price: productData.price,
                color: productData.color
            }}
        })
        .then(data => {
            productData.id = data.data.id
            if(action=='create'){
                newProductModal(productData)
            }else{
                editProductModal(productData)
            }
            setMsg("Product added successfully")
        })
        .then(error => {
            console.log(error)
            setMsg("Error: " + error)
        })
        
    }

    return (
        <Form>
            <p>{msg}</p>
            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter name"  onChange={handleChange} value={productData.name}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductBrand">
                <Form.Label>Brand</Form.Label>
                <Form.Control name="brand" type="text" placeholder="Enter brand"  onChange={handleChange} value={productData.brand}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSize">
                <Form.Label>Size</Form.Label>
                <Form.Control name="size" type="text" placeholder="Enter size"  onChange={handleChange} value={productData.size}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" type="text" placeholder="Enter description"  onChange={handleChange} value={productData.description}/>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control name="price" type="text" placeholder="Enter price"  onChange={handleChange} value={productData.price}/>
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicColor">
                <Form.Label>Color</Form.Label>
                <Form.Control name="color" type="text" placeholder="Enter color"  onChange={handleChange} value={productData.color}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            
          
        </Form>
      );
}

export default ProductDataModal