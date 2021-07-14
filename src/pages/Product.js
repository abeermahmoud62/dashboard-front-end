import React  ,{useState} from 'react'
import styled from "styled-components"
import data from "../data"
// import Alert from "./Alert"
export default function Product ({ name ,price, category,image}) {
    const [Delete, setDelete] = useState(data.products.id);
    function deleteproduct(id) {
        const newList = Delete.filter((item)=> item.id !== id );
        setDelete(newList);
    } 
    return (
        <Wrapper>
                <header>
                    <div className="img_container">
                        <img className="product_image" src={image} alt={name} />
                    </div>
                </header>
                <footer>
                    <div className='product-info'>
                        <h4>{name}</h4>
                        <span className="category">{category}</span>
                        <h4 className="product_price">${price}</h4>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn edit">Edit</button>
                        </div>
                        <div className="col">
                            <button onClick={()=>deleteproduct(data.products.id)} className="btn delete bg-danger">Delete</button>
                        </div>
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
    .row{
        margin-top:3rem;
    }
    footer{
        padding:1rem 1rem ;
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
        margin-bottom: 1rem;
    }
    .product-info h4 {
        margin-bottom:0;
    }
    
    .product_price{
        color: var(--clr-primary-10);
        background: var(--clr-primary-5);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    .category{
        background-color: var(--clr-primary-5);
        color:var(--clr-primary-10);
        font-weight: bold;
        font-size:15px;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    .edit{
        margin-left:4rem;
        width:6rem;
    }
    .delete{
        width:6rem;
        margin-right:2rem;
    }
    .control_product{
        align-items:center;
        margin-left:5rem;
    }
    .btn {
  /* text-transform: uppercase; */
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    }
    .btn:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-1); 
    }
    `