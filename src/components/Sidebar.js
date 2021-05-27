import React from 'react'
import SidebarRow from "./SidebarRow";
import styled from "styled-components"
import Logo from "../pics/Untitled-3.png"
import {NavLink} from "react-router-dom"
import { MdDashboard } from "react-icons/md"
import { GiCube } from "react-icons/gi"
import {FaShoppingCart} from 'react-icons/fa';
import { IoIosPerson } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
function Sidebar() {
    return (
        <Wrapper>
            <div className="sidebar">
                <div className="sidebar_header">
                    <img className="logo" src={Logo} alt="logo"/>
                </div>
                
                    <NavLink className="link" to="/"><SidebarRow  Icon={ MdDashboard } title="Dashboard"/></NavLink>
                    <NavLink className="link" to="/products"><SidebarRow Icon={ GiCube }  title="Products" /></NavLink>
                    <NavLink className="link" to="/orders"><SidebarRow Icon={ FaShoppingCart } title="Orders" /></NavLink>
                    <NavLink className="link" to="/customers"><SidebarRow Icon={ IoIosPerson } title="Customers" /></NavLink>
                    <NavLink className="link" to="/settings"><SidebarRow Icon={ BsFillGearFill } title="Settings" /></NavLink>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`

.sidebar{
    flex:0.2;
    position:fixed;
    top:0;
    z-index:100;
    background-color:#0099ff;
    height:100%;
    width:200px;
    left:0;
    -webkit-border-right-radius: 20px;
    -moz-border-right-radius: 20px;
    border-radius:0px 30px 30px 0px;
}
.sidebar-header {
    align-items: center;
    }
.logo{
    height:70px;
    margin-left:15px;
    object-fit:contain;
}
.active_link {
    background-color:white;
}
.link{
    text-decoration:none !important;
}






@media (max-width: 648px) {
    .sidebar{
        width:100px;
        height:100%
    }
    .logo{
        height:80px;
    }
    
}


`
export default Sidebar;
