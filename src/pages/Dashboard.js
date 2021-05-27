import React from 'react'
import styled from "styled-components"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Cards from "../components/Cards"
import Chart from "../components/Chart"

function Dashboard() {
    return (
        <Wrapper>
            <Header />
            <Sidebar />
            <div className="title" >
                <h2>Dashboard |</h2>
            </div>
            <main className="container-fluid">
                <Cards/>
                <Chart/>
            </main>
        </Wrapper>
    )
}
const Wrapper = styled.div`
*{
    overflow-x:hidden;
    overflow-y:hidden;
    /* margin:0; */
}
h2{
        margin-left:209px;
        margin-top:20px;
    }
.title{
        background-color: hsl(204, 100%, 90%);
        padding: 10px;
        box-shadow: var(--light-shadow);
        transition: var(--transition);
    }
.container-fluid{
    /* margin-left:120px !important; */
}

`

export default Dashboard
