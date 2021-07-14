import React from 'react'
import styled from "styled-components"
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import data from '../data'
function Customers() {
    return(
        <Wrapper>
            <div className="title" >
                <h2><Link className="link" to="/">Dashboard</Link> | Customers</h2>
            </div>
            <div className="container">
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
                        
                            {data.customers.map((column) => {
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
            </div>
            
        </Wrapper>
    )
    
}
const Wrapper = styled.div`
h2{
        margin-left:209px;
        margin-top:20px;
        color:hsl(210, 22%, 49%);
    }
.title{
        background-color: hsl(204, 100%, 90%);
        padding: 10px;
        box-shadow: var(--light-shadow);
        transition: var(--transition);
    }
    .container{
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
    color : var(--clr-blue-1) !important;
    }
    tbody{
        background-color: #fff;
        color:var(--clr-blue-2);
    }
    thead{
        color:hsl(204, 100%, 45%);
        background-color: #ffffff;
    }



`
export default Customers