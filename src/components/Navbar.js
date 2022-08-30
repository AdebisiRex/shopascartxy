import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav></nav>
      <nav className="navbar fixed-top navbar-expand-md bg-light h-10">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            ShopasCart
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Stores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Location
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link text-danger">
                  Become a shopper{" "}
                </Link>
              </li>

              <li className="nav-item"></li>
            </ul>
          </div>
          <Link to="/singin" className="nav-link me-4 fw-bold d-none d-md-block">
            Sign in{" "}
          </Link>
          <Link to="/signup">
            <button
              className="btn btn-lg d-none d-md-block btn-danger rounded-pill px-3 "
              type="submit"
            >
              Signup
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
