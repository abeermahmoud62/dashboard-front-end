import React from 'react'
import styled from "styled-components"
function SidebarRow ({ Icon , title}){
    return (
        <Wrapper>
            <div className="sidebarRow">
                <Icon size={30} className="sidebarRow_icon" />
                <h4 className="sidebarRow_title">{title}</h4>
            </div>
        </Wrapper>
    )
};
const Wrapper = styled.div`
.sidebarRow{
    display:flex;
    align-items:center;
    padding:10px 20px;
}
.sidebarRow:hover {
    cursor:pointer;
    text-decoration:none !important;
    background-color:#ffffff;
    .sidebarRow_icon{
        color:#0099ff;
        text-decoration:none !important;
    }
    .sidebarRow_title{
        color:#0099ff;
        text-decoration:none !important;
    }
}
.sidebarRow:active{
    background-color:#ffffff;
}
.sidebarRow_icon{
    color:#ffffff;
}
.sidebarRow_title{
    flex:1;
    margin-left:10px;
    font-size:22px;
    color:#ffffff;
}

`

export default SidebarRow;