import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutSection
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* About Me Section */}
      <motion.div
        className="content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
      >
        <div className="profile">
          <motion.img
            src="/assets/greatwin.jpg"
            alt="Profile"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        <div className="text">
          <h2>About Me</h2>
          <p>
            I’m a passionate data analyst with a strong foundation in machine
            learning, data analytics, and Python. I’m always excited about
            solving complex problems and learning new things.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <SkillsContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h3
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          My Skills
        </motion.h3>

        <div className="skills-circular">
          <SkillCircular skill="Python" progress={85} />
          <SkillCircular skill="Machine Learning" progress={90} />
          <SkillCircular skill="Data Structures and Algorithms" progress={80} />
          <SkillCircular skill="HTML, CSS" progress={75} />
        </div>
      </SkillsContainer>
    </AboutSection>
  );
};

const SkillCircular = ({ skill, progress }) => (
  <SkillContainer
    as={motion.div}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h4>{skill}</h4>
    <CircularProgressBar progress={progress} />
  </SkillContainer>
);

const CircularProgressBar = ({ progress }) => (
  <ProgressCircleContainer viewBox="0 0 100 100">
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="#e1e1e1"
      strokeWidth="10"
      fill="none"
    />
    <motion.circle
      cx="50"
      cy="50"
      r="45"
      stroke="#007bff"
      strokeWidth="10"
      fill="none"
      strokeDasharray="282.7"
      strokeDashoffset={(1 - progress / 100) * 282.7}
      strokeLinecap="round"
      initial={{ strokeDashoffset: 282.7 }}
      animate={{ strokeDashoffset: (1 - progress / 100) * 282.7 }}
      transition={{ duration: 1.5 }}
    />
    <text x="50" y="50" textAnchor="middle" dy="7px" className="progress-text">
      {progress}%
    </text>
  </ProgressCircleContainer>
);

export default About;

// Styled Components
const AboutSection = styled.div`
  background: linear-gradient(135deg, #fc4a1a, #f7b733, #0099cc);
  color: white;
  padding: 80px 20px;
  text-align: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .profile {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      max-width: 600px;

      h2 {
        font-size: 2.4rem;
        margin-bottom: 15px;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: rgb(254, 254, 254);
      }
    }
  }
`;

const SkillsContainer = styled.div`
  margin-top: 70px;
  background: #f7f7f7;
  padding: 40px 20px;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #333;
    font-weight: 600;
  }

  .skills-circular {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

const SkillContainer = styled.div`
  text-align: center;
  width: 120px;

  h4 {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #333;
    font-weight: 600;
  }
`;

const ProgressCircleContainer = styled.svg`
  width: 80px;
  height: 80px;

  .progress-text {
    font-size: 14px;
    fill: #333;
    font-weight: bold;
  }
`;
