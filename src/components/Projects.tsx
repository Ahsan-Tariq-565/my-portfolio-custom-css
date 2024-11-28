import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css';

const data = [
  {
    id: 0,
    title: "Simple Calculator",
    desc: "A simple HTML and TypeScript powered tool for doing simple math calculations with ease. This tool provides a user-friendly interface for dealing with numbers.",
    img: "/project_01.png",
    tags: ["HTML", "TypeScript", "CSS"],
  
  },
  {
    id: 1,
    title: "Todo List",
    desc: "A React & TypeScript based app for managing and organizing your daily tasks efficiently, keeping you on track with your goals.",
    img: "/project_02.png",
    tags: ["React", "Node","TypeScript", "CSS"],
  },
  {
    id: 2,
    title: "Interactive Resume",
    desc: "A TypeScript-based interactive resume buit with HTML and Css, allowing users to showcase their skills dynamically",
    img: "/project_03.png",
    tags: ["HTML", "Node", "TypeScript", "CSS"],
  },
  {
    id: 3,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript based tool for tracking time with interactive countdown feature",
    img: "/project_04.png",
    tags: ["Next.JS", "Node", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "Weather App",
    desc: "A React & TypeScript powered app for checking weather conditions in your city and also predicting changes based on forecasts. This app provides real-time temp & humidty",
    img: "/project_05.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    desc: "A React & TypeScript powered app for playing Tic Tac Toe with your friend with interactive features and user-friendly design",
    img: "/project_06.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title='My Projects' />
      <div className="projects-grid projects-grid-xl project-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
         <Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />
        ))}
      </div>
    </div>
  );
};

export default Projects;
