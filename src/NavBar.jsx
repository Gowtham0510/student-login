import React, { Component } from "react";
import "./index.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/umd/popper";
import { NavLink } from "react-router-dom";




export class NavBar extends Component {

  render() {
    return (
      <React.Fragment>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <NavLink to="/" className="navbar-brand" >
          UPSHOT
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/students" className="nav-link" activeClassName="active">
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" className="nav-link" activeClassName="active">
                Course List
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </React.Fragment >
      


    

      
  );
  }
}
