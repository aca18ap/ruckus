import React, { useState, useEffect, useMemo } from 'react'
import Button from 'react-bootstrap/Button';
import ProductDataModal from './ProductDataModal';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import axios from 'axios'

import { useTable } from "react-table";


const ProductsList = ({columns, data, newProduct, deleteProductData, editProductData}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns, data: data
    })
    
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setModalTemplate(emptyForm)
    }
    const handleShow = () => setShow(true);
    let [modalMethod, setModalMethod] = useState('new')
    let emptyForm =  {
        id: '',
        name: '',
        brand: '',
        size: '',
        description: '',
        price: 0,
        color: ''
    }
    const [modalTemplate, setModalTemplate] = useState({}) 

    const newProductModal = (product) => {
        handleClose()
        newProduct(product)
    }

    const editProductModal = (product) => {
        handleClose()
        editProductData(product)
    }
        

    function handleDelete(product_id){
        //e.preventDefault();
        let url = 'api/v1/products/' + product_id
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf
        axios.defaults.headers.common['Accept'] = 'application/json';
        if (confirm('Are you sure you want to delete this item?')){
            axios.delete(url)
                .then((res)=>{
                    deleteProductData(product_id);
                })
                .then((err)=>{
                    alert("Something went wrong")
                })
        }
    }
    const emptyDataMessage = () => { alert('No Data to Display') }

    function addButton(){
        setModalMethod('create')
        handleShow();
    }

    function editButton(product_id, i){
        setModalMethod('edit')
        let mT = data.find(x => x.id == product_id)
        setModalTemplate(mT)
        handleShow()
    }

    return(
        <div className='ProductsList'>
            <Button variant="primary" onClick={addButton}>
                Add product
            </Button>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                                <td><button onClick={() => handleDelete(row.cells[0].value)}>Del</button></td>
                                <td><button onClick={() => editButton(row.cells[0].value, i)}>Edit</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>



            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ProductDataModal newProductModal={newProductModal} editProductModal={editProductModal} modalTemplate={modalTemplate} action={modalMethod} ></ProductDataModal>
            </Modal.Body>
          </Modal>
        </div>
    )
}


export default ProductsList
