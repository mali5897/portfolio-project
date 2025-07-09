// src/components/Skills.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Define your skills data based on your resume
const skillsData = [
  {
    category: "Operating Systems",
    skills: ["Windows", "Linux", "MacOS"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "Bash", "PowerShell"],
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Azure", "Google Cloud Platform (GCP)"],
  },
  {
    category: "Cybersecurity Tools",
    skills: [
      "Burp Suite",
      "Metasploit",
      "Nessus",
      "Nikto",
      "Nmap",
      "OWASP ZAP",
    ],
  },
  {
    category: "DevOps Tools",
    skills: [
      "Ansible",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub",
    ],
  },
  {
    category: "Additional Skills",
    skills: [
      "Strong customer service experience",
      "Team collaboration",
      "Troubleshooting",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      {" "}
      {/* bg-light for a light background, py-5 for padding */}
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-success">
          My Skills
        </h2>{" "}
        {/* text-success for green heading */}
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {" "}
          {/* Responsive grid */}
          {skillsData.map((skillCategory, index) => (
            <Col key={index} className="d-flex">
              <Card className="h-100 shadow-sm w-100">
                <Card.Body>
                  <Card.Title className="h5 fw-bold mb-3 text-secondary">
                    {skillCategory.category}
                  </Card.Title>{" "}
                  {/* text-secondary for grey heading */}
                  <ul className="list-unstyled mb-0">
                    {" "}
                    {/* list-unstyled removes bullets, mb-0 for no bottom margin */}
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="mb-2">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                        {/* Placeholder icon, requires Bootstrap Icons */}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
