import React from "react";
import img from "./logo.svg";
import { Link } from "react-router";
export const Navbar = () => {
   return (
      <>
         <nav
            className="navbar navbar-expand-lg  sticky-top container "
            style={{ color: "#505256", backdropFilter: "blur(4px)" }}>
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">
                  <img
                     src={img}
                     alt="Logo"
                     width="42"
                     height="34"
                     class="d-inline-block align-text-top"
                  />
                  Dropdown
               </Link>

               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0 ">
                     <li className="nav-item me-5 ">
                        <Link className="nav-link" to="/">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item me-5">
                        <Link className="nav-link" to="/about">
                           About
                        </Link>
                     </li>
                     <li className="nav-item me-5 ">
                        <Link className="nav-link" to="/blog">
                           Blog
                        </Link>
                     </li>
                  </ul>

                  <button
                     className="btn btn-outline-success custom-btn"
                     type="submit" >
                     Documentation
                  </button>
               </div>
            </div>
         </nav>
      </>
   );
};
