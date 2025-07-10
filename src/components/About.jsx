// src/components/About.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Import Bootstrap components

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      {" "}
      {/* bg-light for a light background, py-5 for padding top/bottom */}
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">About Me</h2>{" "}
        {/* text-center, margin-bottom, display-4 for large heading */}
        {/* Professional Summary */}
        <Row className="mb-5 justify-content-center">
          <Col md={10} lg={8}>
            <p className="lead text-center">
              {" "}
              {/* lead class for larger, lighter text */}
              Motivated and detail-oriented IT professional with a
              strong foundation in cybersecurity, computer information systems,
              and practical lab experience. Proficient in
              cloud computing, programming languages, database management, and
              penetration testing tools. Skilled at
              identifying vulnerabilities, enhancing system security, and
              solving complex technical problems. Seeking
              a customer service or IT role where I can contribute technical
              expertise and drive innovative solutions.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center g-4">
          {" "}
          {/* g-4 for gutter spacing between columns */}
          {/* Technical Skills Card */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              {" "}
              {/* h-100 makes cards equal height, shadow-sm for subtle shadow */}
              <Card.Body>
                <Card.Title className="text-primary mb-3 h4">
                  Technical Skills
                </Card.Title>{" "}
                {/* text-primary for Bootstrap blue */}
                <ul className="list-unstyled text-start">
                  {" "}
                  {/* list-unstyled removes bullets, text-start aligns text left */}
                  
                  <li>
                    <strong>Operating Systems:</strong> Windows, Linux, MacOS
                    
                  </li>
                  
                  <li>
                    <strong>Programming Languages:</strong> Python, Java, Bash,
                    PowerShell 
                  </li>
                  
                  <li>
                    <strong>Cloud Platforms:</strong> AWS, Azure, Google Cloud
                    Platform (GCP) 
                  </li>
                  [cite_start]
                  <li>
                    <strong>Cybersecurity Tools:</strong> Burp Suite,
                    Metasploit, Nessus, Nikto, Nmap, OWASP ZAP 
                  </li>
                  
                  <li>
                    <strong>DevOps Tools:</strong> Ansible, Jenkins, Docker,
                    Kubernetes, Terraform, GitHub 
                  </li>
                  
                  <li>
                    <strong>Additional Skills:</strong> Strong customer service
                    experience, team collaboration, troubleshooting 
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          {/* Notable Projects/Trainings Card */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-success mb-3 h4">
                  Notable Projects/Trainings
                </Card.Title>{" "}
                {/* text-success for Bootstrap green */}
                <ul className="list-unstyled text-start">
                  <li className="mb-3">
                  
                    <strong>
                      Hack The Box Academy Cybersecurity Lab Experience -
                      Penetration Testing (Remote)
                    </strong>{" "}
                   
                    <p className="mb-0 text-muted fst-italic">
                      Jan 2021 - Present
                    </p>{" "}
                   
                    <small>
                      Conducted penetration testing and
                      vulnerability assessments using tools such as Nmap and
                      Burp Suite.  Performed reconnaissance,
                      enumeration, and exploit testing in controlled lab
                      environments. Documented findings and provided
                      actionable recommendations to enhance system security.
                      
                    </small>
                  </li>
                  <li className="mb-3">
                    
                    <strong>Web Application Security Testing</strong> 
                    <small>
                       Assessed web applications for vulnerabilities,
                      including SQL injection and XSS attacks, and implemented
                      secure coding practices. 
                    </small>
                  </li>
                  <li>
                    <strong>Cloud Deployment on AWS</strong> 
                    <small>
                       Designed and deployed scalable applications on
                      AWS using EC2, S3, and CloudFormation templates. 
                    </small>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          {/* Education & Certifications Card */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-info mb-3 h4">
                  Education & Certifications
                </Card.Title>{" "}
                {/* text-info for Bootstrap light blue */}
                <ul className="list-unstyled text-start">
                  <li className="mb-3">
                   
                    <strong>
                      Hunter Business School - Web Application Design &
                      Development Diploma
                    </strong>{" "}
                    
                    <p className="mb-0 text-muted fst-italic">
                      Levittown, NY | Dec 2024 - Present
                    </p>{" "}

                  </li>
                  <li className="mb-3">
                    
                    <strong>
                      Borough of Manhattan Community College - Associate Degree
                      in Computer Information Systems
                    </strong>{" "}
                    
                    <p className="mb-0 text-muted fst-italic">
                      New York, NY | Aug 2016 - May 2021
                    </p>{" "}
                    
                  </li>
                  <li>
                    
                    <strong>
                      eLearnSecurity - Junior Penetration Tester (eJPT)
                      Certification
                    </strong>{" "}
                    
                    <p className="mb-0 text-muted fst-italic">
                      Remote | July 2024
                    </p>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
