import './App.css';
import Login from './LoginDetails/Login';
import React, { useEffect } from 'react';
import Order from './Orders/Order';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { useState } from 'react';
import User from './Users/User';
import Product from './Products/Product';
import Header from './Header/Header';

function App() {
  var [isLoggedIn, setIsLoggedIn] = useState(false);
 

  useEffect(() => {
    var localStateValue = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (localStateValue == null) {
      localStorage.setItem("isLoggedIn", false);
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(localStateValue);
    }
  },[])


  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/orders' element={isLoggedIn === true ? <Order /> : <Navigate to={"/"} />}></Route>
        <Route path='/users' element={isLoggedIn === true ? <User /> : <Navigate to={"/"} />}></Route>
        <Route path='/products' element={isLoggedIn === true ? <Product /> : <Navigate to={"/"} />}></Route>
      </Routes>
     
    </BrowserRouter>

  );
}

export default App;
