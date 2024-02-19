import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/freshcart-logo.svg";
import "./Navbar.css";
import { AuthContextProvider } from "../../Context/AuthContext";
export default function Navbar() {
  
// const {token} = useContext(AuthContextProvider)


// console.log("token" , token);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Fresh logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home 
                
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Brand">
                  Brand
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center cstIcons ">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>

              <li className="nav-item">
                <Link className="nav-link" to="/Logout">
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
