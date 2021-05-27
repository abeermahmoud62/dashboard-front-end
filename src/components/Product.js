import React,{useState} from 'react'
// import Image from "../pics/smartwatch-screen-digital-device.jpg"
import { Link } from 'react-router-dom'
import styled from "styled-components"
import imageEdit from "../pics/edit.png"
import imageDelete from "../pics/Delete.png"

import image from "../pics/PBCLZE0.jpg"

export default function Product ({id , name , description ,price, category}) {
    return (
        <Wrapper>
                <img className="product_image" src={image} alt={name} />
                <footer>
                    <div className='product-info'>
                        <h4>{name}</h4>
                        <span className="category">{category}</span>
                        <h4 className="product_price">${price}</h4>
                    </div>
                        <p>{description}</p>
                    <div className="control_product">
                        <img className="edit" src={imageEdit} alt="edit" />
                        <img  className="edit" src={imageDelete} alt="delete" />
                    </div>
                </footer>
                    
        </Wrapper>
    
    )
    
    }
    const Wrapper = styled.article`
    background: var(--clr-white);
    border-radius: var(--radius);
    margin: 10px;
    height:25rem;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    footer{
        /* margin:.5rem; */
        padding: 1rem 1rem;
    }
    .product_image{
        height: 15rem;
        object-fit: cover;
        border-top-right-radius: var(--radius);
        border-top-left-radius: var(--radius);
    }
    .product-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .3rem;
    }
    .product-info h4 {
        margin-bottom:0;
    }
    .btn-details{
        display: block;
        width: 100px;
        margin: 1rem auto 0 auto;
        color: var(--clr-blue-2);
        letter-spacing: var(--spacing);
        background: transparent;
        border: 1px solid var(--clr-blue-2);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    .btn-details:hover{
        background:var(--clr-blue-2) ;
        color:#ffffff;
    }
    .product_price{
        color: var(--clr-blue-1);
        background: var(--clr-blue-light);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    .category{
        background-color: var(--clr-primary-5);
        font-weight: bold;
        font-size:15px;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    .edit{
        width:3rem;
        height:3rem;
        margin-left:3rem;
    }
    .control_product{
        align-items:center;
        margin-left:5rem;
    }
    
    `