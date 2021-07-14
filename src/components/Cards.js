import React from 'react'
import styled from "styled-components"
import Card from "./Card"
import data from '../data'

function Cards(){
    return(
        <Wrapper>
            
            <div className="container-fluid">
                <div className="header-body">
                    <div className="row">
                            {data.cards.map((card)=>{
                        return ( 
                            <div className="col-md-3">
                                <div className="card card-stats mb-4 mb-xl-0">
                                    <Card {...card}/>
                                </div>
                            </div>
                        )
                        }
                        )}
                    </div>
                </div>
            </div>        
        </Wrapper>
    )
}
const Wrapper = styled.div`
margin-bottom:1.5rem;

.container-fluid {
    width: 100%;
    margin-right: auto;
    margin-left:120px !important;
    padding-right: 15px;
    padding-left: 15px;
    margin-top:20px;
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
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    border-radius: .375rem;
    background-color: #fff;
    background-clip: border-box;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    border:1px solid hsl(210, 31%, 80%);
}

`









export default Cards