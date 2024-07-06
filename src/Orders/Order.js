import Header from "../Header/Header";
import { useState } from "react";
const Order = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState(false);
    return (
        <>
            <Header isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn} />
            <h2 style={{marginTop:"100px"}}>Hello from Order Component..</h2>
        </>
    )
}
export default Order;