import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UsersList from './UsersList.js';
//import ProductsList from './ProductsList.js';
import axios from 'axios'
import { useState, useEffect, useMemo } from 'react';
import ProductsList from './ProductsList.js';





function AdminDashboard(){
    const productColumns = useMemo(
        () => [
            {
                Header: "Products",
                columns: [
                    {
                        Header: "Id",
                        accessor: "id"
                    },
                    {
                        Header: "Name",
                        accessor: "name"
                    },
                    {
                        Header: "Brand",
                        accessor: "brand"
                    },
                    {
                        Header: "Size",
                        accessor: "size"
                    },
                    {
                        Header: "Color",
                        accessor: "color"
                    },
                    {
                        Header: "Price",
                        accessor: "price"
                    },
                    {
                        Header: "Description",
                        accessor: "description"
                    }
                ]
            }
        ]
    )
 
    let [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('api/v1/products/index')
        .then(res => {
            setProducts(res.data)
        })
    }, [])


    const newProduct = (product) => {
        setProducts([...products, product])
    }

    const deleteProduct = (product_id) => {
        setProducts([...products].filter((item, i) => item.id !== product_id ))
    }

    const editProductData = (product) => {
        let prods = [...products].filter((item, i) => item.id !== product.id)
        let newProds = [...prods, product]
        setProducts(newProds)
    }

    return(
        <Container fluid>
            <Row>
                <Col lg="6">
                    <UsersList></UsersList>
                </Col>
                <Col lg="6">
                    <ProductsList editProductData={editProductData} deleteProductData={deleteProduct} newProduct={newProduct} data={products} columns={productColumns} />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminDashboard