import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="logo.png"
              alt=""
              style={{ height: "50px", paddingLeft: "100px" }}
            />
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="dropdown-item p-2">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="dropdown-item p-2">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ¿Que vendemos?
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/products/mangas" className="dropdown-item">
                      Mangas
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/cuadros" className="dropdown-item">
                      Cuadros
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/funkos" className="dropdown-item">
                      Funko Pop's
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};
