import React from "react";
import "./Header.css"
function Header() {
    return (
        <React.Fragment>
            <div class="header-container">
                <div class="header-left-side">
                    <div class="header-logo-wrapper">
                        <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="Logo" />
                        <p class="header-brand-name">Kafene</p>
                    </div>
                    <nav>
                        <a class="nav-bar " href="#orders">Orders</a>
                        <a class="nav-bar " href="#products">Products</a>
                        <a class="nav-bar " href="#users">Users</a>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;
