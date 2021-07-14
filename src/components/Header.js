import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Header() {
    return (
        <Wrapper className="navbar navbar-expand-xl header">
            <ul className="navbar-nav d-flex">
                <li className="nav-item header_input">
                    <SearchIcon className="search_icon" />
                    <input type="text" placeholder="Search" className="form_control"/>
                </li>
                <li className="nav-item first" >
                        <div className="header_icon profile_name">
                            welcome,Abeermahmoud62
                        </div>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        <ExitToAppIcon className="header_icon" size={18}/>
                    </Link>
                </li>
            </ul>
        </Wrapper>
    )
}
const Wrapper = styled.header`

    box-shadow: var(--light-shadow);
    transition: var(--transition);
    margin-bottom:2rem;
    padding-top:1rem;

.first{
    margin-left:24rem;
    margin-right:1rem;
    margin-top:8px;
    color : #000;
}
.header_input{
    display:flex;
    align-items:center;
    margin-left:230px;
    border-radius:10px;
    border:1px solid #66d9ff;
    height:35px;
}
.header_input > input{
    border:none;
    width:400px;
}
input::placeholder{
    color:#b3d9ff;
}
input:focus{
    outline:none;
}
.search_icon{
    color:#4da6ff;
    margin-left:5px;
}

.link{
    color:#4da6ff;
    text-decoration:none;
}

.header_icon{
    color:#4da6ff;
    cursor:pointer;
}

.avatar{
    border-radius:50%;
    width:30px;
    height:30px;
}


@media (max-width: 648px) {
    .header_input{
        margin-left:115px;
    }
    input{
        width:200px;
    }
}
@media (max-width: 348px) {
    .header_input{
        margin-left:120px;
    }
    input{
        width:100px;
    }
}

`











export default Header
