import React from 'react'
import { Button, Card } from 'react-bootstrap'



const ProductTile = ({product}) => {
    return (
        <div className='ProductTile'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.images[0]} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
       
    );
}

export default ProductTile