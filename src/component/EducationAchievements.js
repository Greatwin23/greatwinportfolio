import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTrophy, FaBook } from 'react-icons/fa';

const EducationAchievements = () => {
  return (
    <EducationAchievementsContainer>
      {/* Education Section */}
      <Section
        as={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>Educational Qualifications</Title>
        <ContentList>
          <ContentItem
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Bachelor of Science in Computer Science</h4>
            <p>St Xaviers College Palayamkottai, Tirunelveli</p>
            <p><strong>CGPA:</strong> 6.7</p>
          </ContentItem>
          <ContentItem
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4>Master of Science in Data Analytics</h4>
            <p>Manonmanium Sundaranar University, Tirunelveli</p>
          </ContentItem>
        </ContentList>
      </Section>

      {/* Achievements Section */}
      <Section
        as={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>Achievements</Title>
        <ContentList>
          <ContentItem
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaTrophy className="icon" />
            <h4>The Joy of Computing Using Python</h4>
            <p>NPTEL Online Certification - 60% Elite</p>
          </ContentItem>
          <ContentItem
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaBook className="icon" />
            <h4>Advanced R Programming for Data Analytics in Business</h4>
            <p>NPTEL Online Certification - 54%</p>
          </ContentItem>
        </ContentList>
      </Section>
    </EducationAchievementsContainer>
  );
};

export default EducationAchievements;

// Styled Components
const EducationAchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1100px;
  width: 100%;
  padding: 20px;
  margin: 40px auto;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
`;

const Section = styled.div`
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentItem = styled.div`
  background: linear-gradient(135deg, #d1d8e0, #dfe6e9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;

  h4 {
    font-size: 1.5rem;
    color: #2d3436;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #636e72;
  }

  .icon {
    font-size: 2.5rem;
    color: #0984e3;
    margin-bottom: 10px;
  }

  &:hover {
    background: linear-gradient(135deg, #b2bec3, #dfe6e9);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    h4 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }

    .icon {
      font-size: 2rem;
    }
  }
`;
