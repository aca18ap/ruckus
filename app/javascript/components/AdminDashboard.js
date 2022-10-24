import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UsersList from './UsersList.js'


function AdminDashboard(){
    return(
        <Container fluid>
            <Row>
                <Col>
                    <UsersList></UsersList>
                </Col>
                <Col>
                    Hi
                </Col>
            </Row>
        </Container>
    )
}

export default AdminDashboard