import React from "react";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

import Home from "../Pages/Home";
import Donate from "../Pages/Donate";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/Signup";
import Recipient from "../Pages/Recipient";
import Data from "../Pages/Data";
function MainRoutes() {
    return (
        <>
            <Router>
            <Routes>
            <Route  exact path="/" element={<Home/>} />
            <Route  exact path="/donate" element = {<Donate/>} />
            <Route  exact path="/login" element={<LoginPage/>} />
            <Route  exact path="/signup" element={<SignUpPage/>} />
            <Route  exact path="/require" element={<Recipient/>} />
            <Route  exact path="/explore" element ={<Data/>} />
            </Routes>
            
        </Router>
        </>
        
    )
}

export default MainRoutes