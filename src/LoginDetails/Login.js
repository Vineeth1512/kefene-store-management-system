import React, { useState } from "react";
import "./Login.css"
import Header from "../Header/Header";
import Order from "../Orders/Order";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();


    const loginValidation = (event) => {
        event.preventDefault();
        console.log(username + " " + password);
        if (username === password) {
            alert("Login Successfull..");
            localStorage.setItem("isLoggedIn", true);
            props.setIsLoggedIn(true);
            navigate("/orders")
            console.log(props.isLoggedIn);
        } else {
            alert("Please enter valid credentials!");
        }

    }

    if (props.isLoggedIn) {
        return <Order isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />
    }
    return (
        <React.Fragment>
            <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />
            <main className="main-container">
                <div>
                    <form className="login-page-login-form" onSubmit={loginValidation}>
                        <h1>Sign In</h1>
                        <input className="input-field" type="text" id="username" required
                            placeholder="Enter Username"
                            onChange={(e) => { setUserName(e.target.value) }}
                        />
                        <input className="input-field" type="password"
                            id="password" placeholder="Enter Password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <button className="login-button" type="submit">Login</button>
                    </form>
                </div>
            </main>



        </React.Fragment>
    )
}

export default Login;