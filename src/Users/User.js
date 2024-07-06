import Header from "../Header/Header";
import { useState } from "react";
const User = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState(false);
    return (
        <>
            <Header isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn} />
            <h2 style={{ marginTop: "100px" }}>Hello from Users Component..</h2>

        </>
    )
}
export default User;