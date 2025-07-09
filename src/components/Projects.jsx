// src/components/Projects.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Define your project data here
const projectsData = [
  {
    id: 1,
    title: "Guess a Number",
    description:
      'A classic "guess the number" game, demonstrating basic JavaScript logic and user interaction.',
    demoLink: "https://mali5897.github.io/GuessANumber/",
    githubRepoLink: "https://github.com/mali5897/GuessANumber", // Assuming repo name matches
  },
  {
    id: 2,
    title: "Tree and Book",
    description:
      "A small web project, possibly a static site or a simple interactive page, showcasing HTML/CSS design.",
    demoLink: "https://mali5897.github.io/TreeAndBook/",
    githubRepoLink: "https://github.com/mali5897/TreeAndBook",
  },
  {
    id: 3,
    title: "Rock, Paper, Scissors",
    description:
      "An interactive implementation of the classic rock, paper, scissors game, likely built with JavaScript.",
    demoLink: "https://mali5897.github.io/rock_papers_scissors/",
    githubRepoLink: "https://github.com/mali5897/rock_papers_scissors",
  },
  {
    id: 4,
    title: "Troll Battle",
    description:
      "A text-based or simple UI game where users can engage in a battle with a troll, showcasing conditional logic.",
    demoLink: "https://mali5897.github.io/TrollBattle/",
    githubRepoLink: "https://github.com/mali5897/TrollBattle",
  },
  {
    id: 5,
    title: "ShutterBugg",
    description:
      "A web application potentially related to photography or image management, demonstrating front-end development.",
    demoLink: "https://mali5897.github.io/ShutterBugg/",
    githubRepoLink: "https://github.com/mali5897/ShutterBugg",
  },
  {
    id: 6,
    title: "Odin Recipes",
    description:
      "A project from The Odin Project curriculum, likely an introductory HTML/CSS site for recipes.",
    demoLink: "https://mali5897.github.io/odin-recipes/",
    githubRepoLink: "https://github.com/mali5897/odin-recipes",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      {" "}
      {/* bg-white for a clean background, py-5 for padding */}
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-primary">
          My Projects
        </h2>{" "}
        {/* Text-primary for blue heading */}
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {" "}
          {/* Responsive grid: 1 col on xs, 2 on md, 3 on lg. g-4 for gutters. */}
          {projectsData.map((project) => (
            <Col key={project.id} className="d-flex">
              {" "}
              {/* d-flex makes columns flex containers */}
              <Card className="h-100 shadow-sm w-100">
                {" "}
                {/* h-100 for equal height cards, w-100 for full width in column */}
                <Card.Body className="d-flex flex-column">
                  {" "}
                  {/* flex-column to stack content */}
                  <Card.Title className="h5 fw-bold mb-2">
                    {project.title}
                  </Card.Title>{" "}
                  {/* h5 and fw-bold for title */}
                  <Card.Text className="text-muted mb-3 flex-grow-1">
                    {" "}
                    {/* flex-grow-1 pushes buttons to bottom */}
                    {project.description}
                  </Card.Text>
                  <div className="d-flex justify-content-around mt-auto">
                    {" "}
                    {/* mt-auto pushes div to bottom */}
                    <Button
                      variant="primary"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-45"
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href={project.githubRepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-45"
                    >
                      GitHub Repo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
