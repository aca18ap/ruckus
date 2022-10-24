import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios'



const UsersList = () => {
    let[users, setUsers] = useState({data: []});
    useEffect(() => {
        axios.get('api/v1/users/index')
        .then(data => {
            setUsers(data)
        })
    }, [])

    return(
        <div className='UsersList'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(users.data)}
                    {[...users.data].map((u, idx)=>{
                        return(
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.surname}</td>
                                <td>{u.email}</td>
                            </tr>

                        )
                        
                    })}   

                    
                </tbody> 
            </Table>
        </div>
    )
}

function loadUsers(){
    const url = "api/v1/users/index"
    fetch(url)
        .then((data) => {
            if (data.ok) {
                return data.json()
            }
            throw new Error("Network error")
        })
        .then((data)=>{
            data.forEach((user) => {
                const usr = {
                    key: user.id,
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    email: user.email
                };
                this.setState((prevState)=> ({
                    users: [...prevState.users, usr],
                }));

            });

        })
        .catch((err) => MessageChannel.error("Error: " + err));
}


export default UsersList