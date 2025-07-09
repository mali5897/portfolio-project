// src/components/Contact.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  // Your contact information
  const contactInfo = {
    email: "mahsen.ali5897@gmail.com",
    phone: "917-470-6398", // Display format
    phoneLink: "tel:+19174706398", // Link format for phone
    linkedin: "https://www.linkedin.com/in/muhammad-ali-337134248",
    github: "https://github.com/mali5897",
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      {" "}
      {/* Dark background for contact section */}
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-light">
          Contact Me
        </h2>{" "}
        {/* Light text for heading */}
        <Row className="justify-content-center g-4">
          {/* Email Card */}
          <Col xs={12} md={6} lg={4} className="d-flex">
            <Card className="h-100 w-100 bg-secondary text-white shadow-lg border-0">
              {" "}
              {/* bg-secondary for a slightly lighter dark color */}
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-envelope-fill display-4 mb-3 text-primary"></i>{" "}
                {/* Email icon */}
                <Card.Title className="h5 fw-bold mb-2">Email</Card.Title>
                <Card.Text className="mb-3">{contactInfo.email}</Card.Text>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="btn btn-primary btn-lg mt-auto"
                >
                  Send Email
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Phone Card */}
          <Col xs={12} md={6} lg={4} className="d-flex">
            <Card className="h-100 w-100 bg-secondary text-white shadow-lg border-0">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-phone-fill display-4 mb-3 text-success"></i>{" "}
                {/* Phone icon */}
                <Card.Title className="h5 fw-bold mb-2">Phone</Card.Title>
                <Card.Text className="mb-3">{contactInfo.phone}</Card.Text>
                <a
                  href={contactInfo.phoneLink}
                  className="btn btn-success btn-lg mt-auto"
                >
                  Call Me
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Social Links Card */}
          <Col xs={12} md={6} lg={4} className="d-flex">
            <Card className="h-100 w-100 bg-secondary text-white shadow-lg border-0">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-share-fill display-4 mb-3 text-info"></i>{" "}
                {/* Share icon */}
                <Card.Title className="h5 fw-bold mb-3">
                  Connect With Me
                </Card.Title>
                <div className="d-flex flex-column gap-3 w-75 mt-auto">
                  {" "}
                  {/* Gap for spacing, w-75 for width */}
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-lg d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-linkedin me-2"></i> LinkedIn
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-lg d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-github me-2"></i> GitHub
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
