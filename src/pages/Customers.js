import React from 'react'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import styled from "styled-components"
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
const columns = [
    {
        id: '1',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '2',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '3',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '4',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '5',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    {
        id: '6',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        total:'10',
    },
    ];
function Customers() {
    return(
        <Wrapper>
            <Header />
            <Sidebar/>
            <div className="title" >
                <h2><Link className="link" to="/">Dashboard</Link> | Customers</h2>
            </div>
            <article className="container-fluid">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Customer Name</th>
                            <th>Joining Date</th>
                            <th>Address</th>
                            <th>Total Orders</th>
                            <th>Contacts</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {columns.map((column) => {
                                return(
                                    <tr>
                                        <td>{column.id}</td>
                                        <td>{column.name}</td>
                                        <td>{column.date}</td>
                                        <td>{column.address}</td>
                                        <td>{column.total}</td>
                                        <td>{column.contact}</td>
                                        
                                    </tr>
                                )
                            })}
                        
                    </tbody>
                    </Table>
            </article>
            
        </Wrapper>
    )
    
}
const Wrapper = styled.div`
h2{
        margin-left:209px;
        margin-top:20px;
    }
.title{
        background-color: hsl(204, 100%, 90%);
        padding: 10px;
        box-shadow: var(--light-shadow);
        transition: var(--transition);
    }
    .container-fluid{
        margin-left:200px;
        margin-right:auto;
        margin-top:20px;
        display:flex;
        flex-wrap: wrap;
        box-shadow: var(--light-shadow);
        transition: var(--transition);
    }
    .link{
    text-decoration:none !important;
    color : var(--clr-blue-1);
    }



`
export default Customers