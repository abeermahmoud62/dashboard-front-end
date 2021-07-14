import React , {useState} from 'react'
import styled from 'styled-components'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link } from "react-router-dom"
import Image from '../pics/dash2-.jpg'
export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const LoginForm = () => (
        <Form>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label className="label">Username</Form.Label>
                        <Form.Control
                            autoFocus
                            type="username"
                            value={username}
                            required
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control"
                            placeholder="enter username"
                        />
                        
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label className="label" >Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="enter password"
                            />
                            
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Row>
                            <Form.Check className="checkbox" type="checkbox" label="Remember Me" />
                        </Form.Row>
                    </Form.Group>
                    <Link to="/">
                        <Button block  size="lg" type="submit" className="btn btn-grad">Login</Button>
                    </Link>
                </Form>
    );
    
    
    return (
        
        <Wrapper>
            
            <img className="split left" src={Image} alt="vatrina"/>
            <div className="split right">
                <h2>Login</h2>
                {/* {showLoading()} */}
                {/* {showError()} */}
                {LoginForm()}
            </div>
            
        </Wrapper>
    );
};
const Wrapper = styled.div`
.split{
    height:100%;
    width:50%;
    position: fixed;
    z-index: 1;
    top: 0;
};
.left {
    left:0;
    background-color:#111;
};

h2{
    font-size:45px;
    font-weight:bold;
}
.label{
    margin-left:120px;
    color:#1aa3ff;
}
.form-control{
    margin-left:120px;
    margin-right:100px;
    place-items: center;
    border-radius: 40px;
    height:50px;
    border-color: #1aa3ff;
    width:450px;
}
input:focus, textarea:focus, select:focus{
        outline: none;
    }
.right{
    right:0;
    background-color:white;
    margin-top:80px;
}
h2{
    text-align: center;
    font-family: 'open sans', sans-serif;
    padding: 2rem 0;
    margin: 0;
    color:#0099ff;
}
.checkbox{
    color:#1aa3ff;
    margin-left:120px;
}
.forget{
    /* text-decoration:none; */
    color:#1aa3ff;
    margin-left:200px;
}
.btn-grad{
    width:150px;
    border-radius:40px;
    margin-top:30px;
    height:40px;
    background-image:linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%);
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;   
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 40px;
    display: inline-block;
    cursor: pointer;
    border-color:transparent;
}
.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    text-decoration: none;
}
.btn{
    margin-left:40%;
}


`