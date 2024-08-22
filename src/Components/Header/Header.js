import React from "react";
import img1 from './first.jpg';
import img2 from './second.jpg';
import img3 from './third.jpg';
import './Header.css'

function Header() {
    return (
        <div>
            <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active bg-img1" data-bs-interval="4000">
                        <img
                            src={img1}
                            className="d-block w-100 bg-img1"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-caption ">
                        <h4 className="animated bounceInRight " style={{"animationDelay": "1s"}}>WELCOME</h4>
                        <p className="animated bounceInLeft d-none d-md-block" style={{"animationDelay": "2s"}}>Divided by the world ,United by the BLOOD</p>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={img2}
                            className="d-block w-100 bg-img1"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-caption ">
                        <h4 className="animated bounceInRight " style={{"animationDelay": "1s"}}>WELCOME</h4>
                        <p className="animated bounceInLeft d-none d-md-block" style={{"animationDelay": "2s"}}>Divided by the world ,United by the BLOOD </p>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img3}
                            className="d-block w-100 bg-img1"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-caption ">
                        <h4 className="animated bounceInRight " style={{"animationDelay": "1s"}}>WELCOME</h4>
                        <p className="animated bounceInLeft d-none d-md-block" style={{"animationDelay": "2s"}}>Divided by the world ,United by the BLOOD</p>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Header;