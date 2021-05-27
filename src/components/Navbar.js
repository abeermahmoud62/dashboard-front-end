import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import Logo from "../pics/Untitled-3.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from "../pics/img_avatar.png";
import SearchIcon from '@material-ui/icons/Search';

function Navbar(){
    return(
        <Wrapper>
            <nav className="navbar navbar-expand admin-top-navbar">
                <a href="/" className="navbar-brand">
                    <img src={Logo} alt="logo"/>
                </a>
                <div className="header_input">
                    <SearchIcon className="search_icon" />
                    <input type="text" placeholder="Search" className="form_control"/>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item notification">
                            <NotificationsNoneIcon  className="header_icon"/>
                        </li>
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                    </ul>

                </div>
            </nav>
        </Wrapper>
            
    );
}
const Wrapper = styled.div`
.admin-top-navbar{
    background-color:#fff;
    box-shadow: 0 0 5px rgb(0 0 0 / 8%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    padding: 15px 35px;
}
.navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start;
}
.navbar, .navbar .container, .navbar .container-fluid, .navbar .container-lg, .navbar .container-md, .navbar .container-sm, .navbar .container-xl {
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    /* justify-content: space-between; */
}
.navbar {
    /* position: relative; */
    /* padding: .5rem 1rem; */
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    /* display: block; */
}
*, :after, :before {
    box-sizing: border-box;
}
user agent stylesheet
nav {
    /* display: block; */
}
.navbar-brand {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}
a, a:hover {
    text-decoration: none;
}
a {
    transition: .5s;
    color: #000;
}
a {
    color: #007bff;
    background-color: transparent;
}
*, :after, :before {
    box-sizing: border-box;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.ml-auto, .mx-auto {
    margin-left: auto!important;
}
.navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
dl, ol, ul {
    margin-top: 0;
}
address, dl, ol, ul {
    margin-bottom: 1rem;
}
*, :after, :before {
    box-sizing: border-box;
}
user agent stylesheet
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.admin-top-navbar .navbar-nav .nav-item {
    display: inline-block;
    position: relative;
    padding: 15px 20px;
}


`
export default Navbar 