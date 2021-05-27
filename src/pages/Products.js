import React from 'react'
import  Header   from "../components/Header"
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import Product from "../components/Product"

import Modal from "../components/Modal"
import { Link } from 'react-router-dom'
import data from '../data'
function Products({removeProduct}) {
    return(
        <Wrapper>
            <Header />
            <Sidebar/>
            <div className="title" >
                <h2><Link className="link" to="/">Dashboard</Link> | Products</h2>
            </div>
            <Modal/>
            <article className="container-fluid">
                {data.products.map((product)=>{
                    return <Product key={product.id}  {...product} removeProduct={removeProduct} />
                })
                }
            </article>
        </Wrapper>
    )
    
}
const Wrapper = styled.div`
    *{
    overflow-x:hidden;
    overflow-y:hidden;
    }
    .container-fluid{
        margin-left:200px;
        margin-right:auto;
        margin-top:20px;
        display:flex;
        flex-wrap: wrap;
    }
    /* .btn-modal{
        text-transform: uppercase;
        background: var(--clr-blue-1);
        color: var(--clr-white);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: inline-block;
        transition: var(--transition);
        font-size: 0.875rem;
        border: 2px solid transparent;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius);
        margin-left: 35%;
        margin-top:1rem;
        height:50px;
        width:500px;
        align-items:center;
    }
    .btn-modal:hover{
    color: var(--clr-blue-1);
    background: transparent;
    } */
    .modal{
        margin-left:200px;
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
        margin-bottom:15px;
        box-shadow: var(--light-shadow);
        transition: var(--transition);
    }



`
export default Products