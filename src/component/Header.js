import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion"; // For animation
import { FaBars, FaTimes } from "react-icons/fa"; // For icons

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Antony Greatwin JS
      </Logo>
      <MenuIcon onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavList isOpen={isMobileMenuOpen}>
        <li>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/education" onClick={() => setMobileMenuOpen(false)}>Education</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Header;

// Styled Components
const Nav = styled.nav`
  background: linear-gradient(135deg, #1e2a47, #283c65, #4f6b8f);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(motion.h1)`
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  color: #f39c12;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(-5deg);
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #f39c12;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #f39c12;
        transform: scaleX(0);
        animation: underline 0.3s forwards;
      }
    }
  }

  @keyframes underline {
    to {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    right: 0;
    background: #1e2a47;
    width: 100%;
    height: ${props => (props.isOpen ? "auto" : "0")};
    overflow: hidden;
    transition: height 0.3s ease;
    gap: 20px;
    padding: ${props => (props.isOpen ? "20px 0" : "0")};
    z-index: 999;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
