import React from 'react'
import styled from "styled-components"
function Card ({ icon, label, value }) {
    return (
        <Wrapper>
            <div className="item">
                <div className="icons">
                    <span className="icon">{icon}</span>
                </div>
                <div>
                    <h2>{value}</h2>
                    <p>{label}</p>
                </div>
            </div>
        </Wrapper>
    );
    };
const Wrapper = styled.article`
.item{
    display:grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    border-radius: 5px;
    border:1px solid black;
    box-shadow: var(--dark-shadow);
    transition: var(--transition);
    /* padding: 1rem 2rem; */
    background-color:#ffffff;
}
.icons{
    border-radius:50%;
    width:4rem;
    height:4rem;
    background-color:#1a75ff;
}
.icon{
    color:black;
    font-size: 2.5rem;
    align-items:center;
}
h2 {
    margin-bottom: 0;
    letter-spacing: 0;
    place-items: right;
}
p {
    margin-bottom: 0;
    text-transform: capitalize;
}
`

    export default Card