import React, { useState } from "react";
import "./Header.css"
import { Link, useNavigate } from "react-router-dom";
function Header(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    let localVaraible = JSON.parse(localStorage.getItem("isLoggedIn"));
    console.log(localVaraible);
    const renderButton = () => {
        console.log(props.isLoggedIn);
        console.log(isLoggedIn);
        if (props.isLoggedIn||localVaraible) {
            console.log(isLoggedIn);
            return <button className="logout-btn" onClick={() => {
                localStorage.setItem("isLoggedIn", false);
                setIsLoggedIn(false);
                navigate('/');
                window.location.href = '/';
            }}>Logout</button>
        } else {
            return "" ;
        }
    }

    return (
        <React.Fragment>
            <div className="header-container">
                <div className="header-left-side">
                    <div className="header-logo-wrapper">
                        <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="Logo" />
                        <p className="header-brand-name">Kafene</p>
                    </div>
                    <div>
                        <nav>
                            <Link className="nav-bar" to={"/orders"}>Orders</Link>
                            <Link className="nav-bar " to={"/products"}>Products</Link>
                            <Link className="nav-bar " to={"/users"}>Users</Link>
                            
                        </nav>
                    </div>
                    <div className="logout-btn">
                    {renderButton()}
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;
