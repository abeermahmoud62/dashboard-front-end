import React from 'react'
import styled from "styled-components"
import { IoIosPerson } from "react-icons/io";
import {FaShoppingCart} from 'react-icons/fa';
import {FaShippingFast} from 'react-icons/fa';
function Cards(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="header-body">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card card-stats mb-4 mb-xl-0">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-muted mb-0"> New Users</h5>
                                            <span className="h4 font-weight-bold mb-0">350,897</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                                                <i className="icons"><IoIosPerson size={60}/></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-stats mb-4 mb-xl-0">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title  text-muted mb-0">New Orders</h5>
                                            <span className="h4 font-weight-bold mb-0">350,897</span>
                                        </div>
                                        <div class="col-auto">
                                            <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                                                <i className="fas fa-chart-bar"><FaShoppingCart size={60}/></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-stats mb-4 mb-xl-0">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-muted mb-0">Shipped</h5>
                                            <span className="h4 font-weight-bold mb-0">350,897</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                                                <i className="fas fa-chart-bar"><FaShippingFast size={60}/></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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


.col {
    max-width:100%;
    flex-basis: 0;
    flex-grow: 1;
}

.col-auto {
    width: auto;
    max-width: none;
    flex: 0 0 auto;
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

.card-body {
    padding: 1.2rem;
    flex: 1 1 auto;
}

.card-title {
    margin-bottom: 1.3rem;
}




`
export default Cards