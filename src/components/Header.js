import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchIcon from '@material-ui/icons/Search';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from "../pics/img_avatar.png";
function Header() {
    return (
        <Wrapper>
            <div className="header">
                <div className="header_input">
                    <SearchIcon className="search_icon" />
                    <input type="text" placeholder="Search" className="form_control"/>
                </div>
                <div className="header_right">
                    {/* <div>
                        <NotificationsNoneIcon  className="header_icon"/>
                    </div> */}
                    <div className="header_icon">
                        <img className="avatar" src={Avatar} alt="avatar"/>
                    </div>
                    <Link to="/profile" className="link">
                        <div className="header_icon profile_name">
                            John Doe
                        </div>
                    </Link>
                    <Link to="/login">
                        <ExitToAppIcon className="header_icon" size={18}/>
                    </Link>
                    
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.header`
.header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#ffffff;
    padding:20px;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    margin-bottom:2rem;
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
.header_right{
    display:flex;
    align-items:center;
}
.link{
    color:#4da6ff;
    text-decoration:none;
}
.header_icon{
    margin-right:15px;
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
