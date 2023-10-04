import React from "react";
import "./Login.css"
function Login() {
    return (
        <React.Fragment>
            <main class="main-container">
                <div>
                    <form class="login-page-login-form">
                        <h1>Sign In</h1>
                        <input class="input-field" type="text" id="username" required
                            placeholder="Enter Username" />
                        <input class="input-field" type="password"
                            id="password" placeholder="Enter Password" />
                        <button class="login-button" type="submit">Login</button>
                    </form>
                </div>
            </main>



            
        </React.Fragment>
    )
}

export default Login;