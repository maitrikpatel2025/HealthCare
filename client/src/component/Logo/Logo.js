import React from "react";

import './Logo.css'
import LogoIcon from "../../assets/apple-touch-icon.png";
import Nav from "react-bootstrap/Nav";
import LogoText from "../../assets/Predicheck.svg";

import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div className="Logo">
            <Nav.Link as={Link} to="/" className="m-0 p-0" eventKey="0">
                <div className="Logo">
                <img src={LogoIcon} alt="icon"  width= '91px'
    height= '50px' />
                <img src={LogoText} alt="logo"   width= '150px'
    height= '70px' />
                </div>
            </Nav.Link>
        </div>
    );
};

export default Logo;