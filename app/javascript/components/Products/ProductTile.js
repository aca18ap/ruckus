import React from 'react'
import Link from 'react-dom'
import { Button, Card } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';




const ProductTile = ({product}) => {
    const url = '/products/' + product.id
    return (
        <div className='ProductTile'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={''} />
                {console.log(product)}
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <LinkContainer to={url}> 
                        <Nav.Link>View</Nav.Link>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </div>
       
    );
}

export default ProductTile