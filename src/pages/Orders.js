import React from 'react'
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import  Header   from "../components/Header"
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import image1 from "../pics/0_.png"
import image3 from "../pics/75_.png"
import image4 from "../pics/50_.png"
import image5 from "../pics/25_.png"
import image2 from "../pics/75_.png"

const columns = [
    {
        id: '1',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image1,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '2',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image2,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '3',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image3,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '4',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image4,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '5',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image5,
        payment:'on delivery',
        total:'500 $',
    },
    {
        id: '6',
        name: 'john due',
        date: '17-july-2021',
        address: 'Mansoura',
        contact: '01234567891',
        status:image3,
        payment:'on delivery',
        total:'500 $',
    },
    ];
function Orders() {
    return(
        <Wrapper>
            <Header/>
            <Sidebar/>
            
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
                        
                            {columns.map((column) => {
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
        box-shadow: var(--light-shadow);
        transition: var(--transition);
    }
    tbody{
        background-color: #e6f0ff;
        color:var(--clr-blue-2);
    }
    thead{
        color:#003d99;
        background-color: #ffffff;
    }
    h2{
        margin-left:209px;
        margin-top:20px;
    }
    
    .link{
    text-decoration:none !important;
    color : var(--clr-blue-1);
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