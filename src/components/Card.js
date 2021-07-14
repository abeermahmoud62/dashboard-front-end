import React from 'react'
import styled from "styled-components"

function Card({title , number , icon ,color }){
    return(
        <Wrapper>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-title text-muted mb-0">{title}</h5>
                        <p>(Last Month)</p>
                        <p className="h4 font-weight-bold mb-0">{number}</p>
                    </div>
                    <div className="col-auto">
                        {/* <div className="icon icon-shape bg-primary text-white rounded-circle shadow"> */}
                        <span className={color}>
                            {icon}
                        </span>
                    </div>
                </div>
            </div>
    </Wrapper>
    )
}
const Wrapper = styled.div`
.card-body {
    padding: 1rem;
    flex: 1 1 auto;
}
.row {
    display: flex;
    margin-right: -15px;
    margin-left: -15px;
    flex-wrap: wrap ;
    margin-top:10px;
    
}


.col,
.col-auto,
.col-lg-6,
.col-md-3,
.col-xl-6 {
    position: relative;
    width: 50%;
    min-height: 1px;
    padding-right: 15px;
    /* padding-left: 15px; */
    
    }
.col {
    max-width:100%;
    flex-basis: 0;
    flex-grow: 1;
}
.card-title {
    margin-bottom: 1.3rem;
}
.col-auto {
    width: auto;
    max-width: none;
    flex: 0 0 auto;
}

.icons{
    align-items:center !important;
}
@media (min-width: 992px) {
.col-lg-6 {
    max-width: 50%;
    flex: 0 0 50%;
    }
}
@media (min-width: 1200px) {
.col-md-2 {
    max-width: 25%;
    flex: 0 0 25%;
}
.col-xl-6 {
    max-width: 50%;
    flex: 0 0 50%;
}
}
span{
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    }
.colors{
    background-color: #0099ff;
}


`
export default Card