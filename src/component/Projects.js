import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      title: "Kollywood Box Office Prediction",
      description: "A Machine Learning Model for Predicting Box office in Kollywood.",
      img: "https://static.moviecrow.com/marquee/tn-box-office-highest-grossers---2023/223585_thumb_665.jpg"
    },
    {
      title: "E-Farm Bazaar",
      description: "Web app to help the farmers to directly interact with the customers",
      img: "https://foodtech-files.s3-eu-west-2.amazonaws.com/494b6feb465aac7e755091c40f0bb00895e6414844dee7e389a1100cd2aa26ec" }
  ];

  return (
    <ProjectsContainer>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>
      <div className="projects">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <ProjectCard>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
                <div className="overlay"></div>
              </div>
              <div className="info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </ProjectCard>
          </motion.div>
        ))}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  padding: 50px 0;
  background: linear-gradient(135deg, #f5f7fa,rgb(151, 179, 224));
  text-align: center;

  h1 {
    color: #333;
    margin-bottom: 40px;
    font-size: 2.8rem;
    font-weight: 600;
  }

  .projects {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px;
  }
`;

const ProjectCard = styled.div`
  width: 300px;
  height: auto;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(3deg);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    background: linear-gradient(145deg, #ffffff, #dcdcdc);
  }

  .img-container {
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-bottom: 2px solid #ccc;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }

    &:hover .overlay {
      opacity: 1;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    text-align: center;
    
    h3 {
      margin-bottom: 10px;
      color: #007bff;
      font-size: 1.3rem;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    p {
      font-size: 1rem;
      margin-bottom: 15px;
      color: #555;
      line-height: 1.5;
      transition: color 0.3s ease;
    }

    a {
      color: #007bff;
      font-weight: bold;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 5px;
      border: 2px solid #007bff;
      transition: all 0.3s ease;

      &:hover {
        background-color:rgb(9, 122, 244);
        color: #fff;
        border: 2px solid transparent;
      }
    }
  }
`;
