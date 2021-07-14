import React , { useState }   from 'react'
import styled from "styled-components"
import data from "../data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function Reviews() {
    const [index, setIndex] = useState(0);
    const { name,  image, text , product } = data.reviews[index];
    const checkNumber = (number) => {
        if (number > data.reviews.length - 1) {
        return 0;
        }
        if (number < 0) {
        return data.reviews.length - 1;
        }
        return number;
    };
        const nextPerson = () => {
        setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
        });
    };
    return (
    <ReviewWrapper>
        <section className='container'>
        <div className='title'>
            <h2>our reviews</h2>
            <div className='underline'></div>
        </div>
        <article className="reviews">
            <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
            <FaQuoteRight />
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='product'>{product}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
            </button>
        </div>
        </article>
    </section>
    
            
        </ReviewWrapper>
    )
}
const ReviewWrapper = styled.main`
    margin-left:200px;
    margin-top:20px;
    min-height: 100vh;
    display: grid;
    /* place-items: center; */
    .title {
    text-align: center;
    margin-bottom: 4rem;
    }
    .underline {
    height: 0.25rem;
    width: 5rem;
    background: #0099ff;
    margin-left: auto;
    margin-right: auto;
    }
    .container {
    width: 80vw;
    max-width: var(--fixed-width);
    }
    .review {
    background: var(--clr-white);
    padding: 1.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    text-align: center;
    margin-left:150 px;
    }
    .review:hover {
    box-shadow: var(--dark-shadow);
    }
    .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    }
    .person-img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    }
    .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: #0099ff;
    color: var(--clr-white);
    }
    .img-container::before {
    content: '';
    width: 100%;
    height: 100%;
    background: #0099ff;
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
    }
    .author {
    margin-bottom: 0.25rem;
    margin-left:220px;
    }
    .product {
    margin-bottom: 0.5rem;
    /* text-transform: uppercase; */
    color: #0099ff;
    font-size: 1.2rem;
    margin-left:240px;
    }
    .info {
    margin-bottom: 0.75rem;
    }
    .prev-btn,
    .next-btn {
    color: #0099ff;
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    margin-left:180px;
    transition: var(--transition);
    cursor: pointer;
    }
    .prev-btn:hover,
    .next-btn:hover {
    color: var(--clr-primary-5);
    }
    .random-btn {
    margin-top: 0.5rem;
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    transition: var(--transition);
    border-color: transparent;
    cursor: pointer;
    }
    .random-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
    }`

export default Reviews
