
import React from "react";
import "./header.css";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/logo1.png";
const NAV_LINKS = [
    {
        display: "Home",
        url: "/",
    },
    {
        display: "Hash",
        url: "/hash",
    },
    {
        display: "Block",
        url: "/block",
    },
    {
        display: "Blockchain",
        url: "/blockchain",
    },
    {
        display: "Distributed",
        url: "/distributed",
    },
    {
        display: "Tokens",
        url: "/tokens",
    },
    {
        display: "Coinbase",
        url: "/coinbase",
    }
];

const Header = () => {
    return (
        <header className="header" >
            <Container>
                <div className="navigation">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div className="logo">
                            <img className="logo_img" src={Logo}></img>
                        </div>
                    </Link>
                    <div className="nav__menu"  >
                        <ul className="nav__list">
                            {NAV_LINKS.map((item, index) => (
                                <li className="nav__item" key={index}>
                                    <NavLink to={item.url} className={(navClass) => navClass.isActive ? "active" : ""}>
                                        {item.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
