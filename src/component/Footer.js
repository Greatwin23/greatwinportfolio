import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #007bff;
  color: white;
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;

  p {
    margin: 0.5rem 0;
  }

  a {
    color: #ffdd57;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #ffcc00;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .social-links a {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;

    .social-links {
      gap: 0.8rem;
    }

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;

    .social-links a {
      font-size: 0.9rem;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 Greatwin. Copy Rights @ antonygreatwinjs@gmail.com</p>
    <div className="social-links">
      <a href="https://github.com/Greatwin23" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/antony-greatwin-j-s-42908a275/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  </FooterWrapper>
);

export default Footer;
