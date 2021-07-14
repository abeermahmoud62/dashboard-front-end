import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
export default function Error() {
    return (
    <Wrapper>
        <main className="error-page section">
            <div className="error-container">
                <h1>404</h1>
                <h3>Sorry, the page you tried cannot be found</h3>
                <Link to="/" className="btn btn-primary">
                    Dashboard
                </Link>
            </div>
        </main>
    </Wrapper>
    );
}
const Wrapper = styled.div`
background-color: var(--clr-blue-light);
.section{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    width:100%;
    height:100%;
}
.error-container{
    padding:13rem;
}
.btn{
    margin-top:10px;
}



`