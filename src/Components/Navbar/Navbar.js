import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from './bloodmitr.png'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"
                    ><img src={logo} alt="" width="150px" height="55px"
                        /></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul
                            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{ '--bs-scroll-height': '100px' }}>
                            <li className="nav-item">
                                <Link to="/" className="nav-link navITEM">
                                    VOLUNTEERS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/donate" className="nav-link navITEM">
                                    DONATE
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/require" className="nav-link navITEM">
                                    FIND A DONOR
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/explore" className="nav-link navITEM">
                                    EXPLORE
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link navITEM">
                                    JOIN US
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav sideITEMS" style={{ '--bs-scroll-height': '100px' }}>
                            <li className="nav-item">
                                <Link className="nav-link navITEM" aria-current="page" to="/request"
                                >REQUESTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navITEM" to="/login">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;