import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Shopping Point"
              description="Created a robust E-commerce platform leveraging ReactJS and NodeJS, offering secure Google AUTH login for seamless user access. The platform provides personalized account management and an intuitive shopping experience, allowing users to browse, add products to their cart, and manage purchases with ease."
              ghLink="https://github.com/aakash240402/Shopping_Point_E-Commerce"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fitness Tracker"
              description="Developed a full-stack fitness tracker application using the MERN stack, enabling users to monitor their fitness journey effectively. The platform allows users to log workouts, track progress over time, and set personalized fitness goals. With a responsive design and seamless integration of MongoDB, Express.js, ReactJS, and Node.js, the application ensures secure data management and an intuitive user experience."
              ghLink="https://github.com/aakash240402/fitneetrack"
              demoLink="https://fitness-amehta.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Vacation Email Replier"
              description="Developed an intelligent email automation tool that seamlessly checks your Gmail inbox, automatically responds to new emails that haven't been replied to, and efficiently organizes conversations with custom labels. By incorporating smart timing intervals, the tool ensures responses mimic natural communication patterns, providing a reliable solution for managing emails while you are away."
              ghLink="https://github.com/aakash240402/vacation_email_replier"
              demoLink="https://www.loom.com/share/abc21c44fc53428590a77baa524db3f6?sid=8163b031-991d-44cf-8d49-03bb11c0f179"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Tour Global"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/aakash240402/TOUR_GLOBAL_REACT/"
              demoLink="https://tourglobe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Text to 2D and 3D Image (Major Project)"
              description="Implemented a StackGAN architecture to convert textual descriptions into realistic images, achieving 256x256 image generation using provided datasets. Led a collaborative team through the project's lifecycle, with results optimized for better hardware, showcasing potential beyond the initial 20-epoch output."
              ghLink="https://github.com/aakash240402/text_to_image_stackgan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="IoT Virtual Doctor Robot (Minor Project)"
              description="This project showcases the potential of IoT and robotics in improving healthcare delivery. 
              This idea was thought keeping in mind the situation during Covid."
              ghLink="https://github.com/aakash240402/IOT_based_virtual_Robot_MINOR2"
              demoLink="https://www.linkedin.com/posts/aakash-mehta-5a88981b6_iot-telemedicine-healthcareinnovation-activity-7209452687711432705-rUhX?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
