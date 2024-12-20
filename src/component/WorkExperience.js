import React from "react";
import styled from "styled-components";

const WorkExperience = () => {
  return (
    <ExperienceContainer>
      <h1>Work Experience</h1>
      <div className="experience">
        <ProjectCard>
          <h3>Data Analytics Intern</h3>
          <p>Oasis Info Byte | May – June 2024</p>
          <ul>
            <li>Performed thorough data analysis to uncover trends and correlations.</li>
            <li>Implemented data validation processes to ensure data integrity.</li>
          </ul>
        </ProjectCard>
      </div>
    </ExperienceContainer>
  );
};

export default WorkExperience;

/* Styled Components */
const ExperienceContainer = styled.div`
  padding: 2rem;
  background: rgb(17, 32, 70);
  min-height: 100vh;
  text-align: center;

  h1 {
    color: #007bff;
    margin-bottom: 1.5rem;
    font-size: 2rem; /* Adjust font size */
  }

  .experience {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #555;
    margin-bottom: 1rem;
  }

  ul {
    text-align: left;
    list-style: disc;
    margin-left: 1rem;

    li {
      margin-bottom: 0.5rem;
      color: #666;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem; /* Adjust font size for smaller screens */
    }

    .experience {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.2rem; /* Smaller font size for mobile devices */
    }

    .experience {
      padding: 1rem;
    }
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  width: 300px; /* Ensure fixed width on larger screens */
  max-width: 100%; /* Prevent overflow on small screens */

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    color: #007bff;
  }

  a {
    color: #007bff;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }

  /* Responsive Design for ProjectCard */
  @media (max-width: 768px) {
    width: 100%; /* Take full width on smaller screens */
    padding: 1rem;
  }
`;
