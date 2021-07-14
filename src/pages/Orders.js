import React from 'react'
import styled from "styled-components"
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import data from '../data'
function Orders() {
    return(
        <Wrapper>
            <div className="title" >
                <h2><Link className="link" to="/">Dashboard</Link> | Orders</h2>
            </div>
            <article className="container-fluid">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Customer Name</th>
                        <th>Delivery Date</th>
                        <th>Delivery Address</th>
                        <th>Total</th>
                        <th>Payment Method</th>
                        <th>Contacts</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.orders.map((column) => {
                                return(
                                    <tr>
                                        <td>{column.id}</td>
                                        <td>{column.name}</td>
                                        <td>{column.date}</td>
                                        <td>{column.address}</td>
                                        <td>{column.total}</td>
                                        <td>{column.payment}</td>
                                        <td>{column.contact}</td>
                                        <td><img src={column.status} alt="progress"/></td>
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
    .container-fluid{
        margin-left:200px;
        margin-right:auto;
        margin-top:20px;
        display:flex;
        flex-wrap: wrap;
        box-shadow: var(--dark-shadow);
        transition: var(--transition);
    }
    tbody{
        background-color: #fff;
        color:var(--clr-blue-2);
    }
    thead{
        color:hsl(204, 100%, 45%);
        background-color: #ffffff;
    }
    h2{
        margin-left:209px;
        margin-top:20px;
        color:hsl(210, 22%, 49%)
    }
    
    .link{
    text-decoration:none !important;
    color : var(--clr-blue-1) !important;
    }
    .title{
        background-color: hsl(204, 100%, 90%);
        padding: 10px;
        box-shadow: var(--light-shadow);
        transition: var(--transition);
    }
    td>img{
        width:4rem;
        height:3rem;
    }

    `

    export default Orders