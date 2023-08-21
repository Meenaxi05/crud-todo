import React from "react";
import { Link, NavLink } from "react-router-dom";

// link - we use link to navigate from one page to another page   orto set the URL

const Navbar = () => {
  return (

    // created a navbar

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          React users
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/addusers">Add Users</Link>
      </div>
    </nav>


  )
}



export default Navbar

// to go from one page to another to navigate we are using -> router


