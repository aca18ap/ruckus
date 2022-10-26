import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductTile from './ProductTile'
import { Button, Card } from 'react-bootstrap'

function ProductsGrid({products}){
    return(
        <Container>
            <h1 className={"text-black"}>All products</h1>
            <Row>
                {products.map((product)=>{
                    return(
                        <Card style={{ width: '18rem' }}>
                            {console.log(product)}
                            <Card.Img variant="top" src={''} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ProductsGrid