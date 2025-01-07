import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Assuming Particle is a visual component for animation effects

function Experience() {
  const education = {
    sectionTitle: "Education",
    items: [
      {
        title: "Bachelor Of Technology in Electronics and Communication Engineering",
        period: "2020 - 2024",
        location: "Jaypee Institute of Information Technology, Noida",
        description:
          "Having 7.3 CGPA till semester 7 in a branch that engages with the science of Electronics and encompasses a wide range of applications.",
      },
      {
        title: "Class XII",
        period: "2019 - 2020",
        location: "St. Marks Senior Secondary Public School, New Delhi",
        description:
          "Successfully completed with PCM stream, achieving an overall percentage of 82.2%.",
      },
      {
        title: "Class X",
        period: "2017 - 2018",
        location: "St. Marks Senior Secondary Public School, New Delhi",
        description:
          "Achieved an impressive overall percentage of 80.8%, demonstrating strong academic proficiency.",
      },
    ],
  };

  const workExperience = {
    sectionTitle: "Work Experience",
    items: [
      {
        title: "Associate Software Engineer",
        period: "Sept 2024 - present",
        location: "Tech Mahindra Limited",
        description: "Under Probation – Participated in comprehensive training covering Agile, Software Testing, CloudComputing, SQL, etc. enhancing foundational knowledge in Development and Testing.",
      },
      {
        title: "Software Developer Intern",
        period: "May 2023 - July 2023",
        location: "Spade Infotech Pvt Ltd",
        description: "Developed web applications using Angular and .NET 6.0, collaborating with cross-functional teams.",
      },
    ],
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="timeline-container">
          {/* Education Timeline (Left Side) */}
          <Col md={5} className="timeline-left">
            <h3 className="timeline-heading">Education</h3>
            <div className="timeline">
              {education.items.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>{item.title}</h5>
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Timeline Divider Line */}
          <Col
            xs={0}
            sm={0}
            md={1}
            className="timeline-divider"
            style={{
              borderLeft: "2px solid #fff",
              height: "100%",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />

          {/* Work Experience Timeline (Right Side) */}
          <Col md={5} className="timeline-right">
            <h3 className="timeline-heading">Work Experience</h3>
            <div className="timeline">
              {workExperience.items.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>{item.title}</h5>
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
