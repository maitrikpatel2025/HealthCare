import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../Logo/Logo";
import "./TopNav.css";

import { Link } from "react-router-dom";


class TopNav extends Component {
  itemStyle = {
    color: "black",
    fontSize: "15px",
    fontWeight: "900",
    padding: "0px 20px",
    marginTop: "5px",
  };

  renderLinks() {
      return (
        <div className="TopNav p-1 pt-3 bg-white">
          <Navbar expand="xl" collapseOnSelect>
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >

              <Nav className="ml-auto">
                <Nav.Link as={Link} eventKey="7"
                  to="/breastcancer"
                  className="text-black Nav-text  navbar-right"

                >
                 Breast Cancer

                </Nav.Link >
                <Nav.Link as={Link} eventKey="8"
                  to="/diabetes"
                  className="text-black Nav-text "
                >
                  Diabetes
                </Nav.Link >
                <Nav.Link as={Link} eventKey="9"
                  to="/heart"
                  className="text-black Nav-text "
                >
                  Heart
                </Nav.Link >
                <Nav.Link as={Link} eventKey="9"
                  to="/kidney"
                  className="text-black Nav-text "
                >
                  Kidney
                </Nav.Link >
                <Nav.Link as={Link} eventKey="9"
                  to="/liver"
                  className="text-black Nav-text "
                >
                  Liver
                </Nav.Link >
                <Nav.Link as={Link} eventKey="10" to="/about" className="text-black Nav-text ">
                  About
                </Nav.Link >
              </Nav>
            </Navbar.Collapse>
          </Navbar >
        </div >
      );
    }
  render() {
    return <>{this.renderLinks()}</>;
  }
}


export default TopNav;