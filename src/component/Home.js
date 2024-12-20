import React, { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import WorkExperience from "./WorkExperience";

const Home = () => {
  const workRef = useRef(null); // Initialize the ref properly

  // Scroll to WorkExperience section
  const scrollToWork = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Home Section */}
      <HomeContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Parallax
            bgImage="https://source.unsplash.com/random/1920x1080"
            strength={300}
          >
            <ContentWrapper>
              <h1>Welcome to My Portfolio</h1>
              <p>Data Analyst | Data Scientist</p>
              <button onClick={scrollToWork}>Explore My Work</button>
            </ContentWrapper>
          </Parallax>
        </motion.div>
      </HomeContainer>

      {/* Work Experience Section */}
      <div ref={workRef}>
        <WorkExperience />
      </div>
    </div>
  );
};

export default Home;

/* Styled Components */
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://www.dasca.org/Content/images/main/data-analytics-certification.jpg") no-repeat center center/cover;
  color: white;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
 
  color: white;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  button {
    padding: 10px 20px;
    background: #f39c12;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover {
      background: #e67e22;
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 8px 16px;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      padding: 6px 12px;
    }
  }
`;
