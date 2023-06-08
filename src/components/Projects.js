import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import medical from "../assets/img/project-medical-logo.jpg";
import beSuccessful from "../assets/img/project-BeSuccessful.png";
import client from "../assets/img/project-client.png";

// 519 x 380

import newTab from "../assets/img/icons8-new-tab.svg";

function Projects(){

  const projects = [
    {
      title: <a href='https://github.com/jeffreyli0312/medi-scanner' target='_blank' style={{color: 'white', textDecoration: 'none'}}>Medi-Scanner <img src={newTab} style={{height: 'auto', width:'6%'}}></img></a>,
      description: <div style={{margin: '0px 35px 0px 35px', textAlign: 'left'}}><h7>Medi-Scanner classifies your injury severity with over 80% training accuracy, and instantly returns professional aftercare instructions. Medi-Scanner was built using Python Flask, OpenCV, TensorFlow ML, and frontend display.</h7></div>,
      imgUrl: medical,
    },
    {
      title: <a href='https://github.com/jeffreyli0312/client-manager' target='_blank' style={{color: 'white', textDecoration: 'none'}}>Client Record System <img src={newTab} style={{height: 'auto', width:'6%'}}></img></a>,
      description: <div style={{margin: '0px 35px 0px 35px', textAlign: 'left'}}><h7>Client Manager tracks and registers all clients using object-oriented design, polymorphism, algorithmic searching/sorting, and more. Customers can be upgraded, downgraded, modified, sorted, or searched.</h7></div>,
      imgUrl: client,
    },
    {
      title: <a href='https://github.com/jeffreyli0312/BeSuccessful' target='_blank' style={{color: 'white', textDecoration: 'none'}}>BeSuccessful <img src={newTab} style={{height: 'auto', width:'6%'}}></img></a>,
      description: <div style={{margin: '0px 35px 0px 35px', textAlign: 'left'}}><h7>Created using the MERN Stack (MongoDB, Express.js, React.js, Node.js), BeSuccessful serves as the social media platform that allows users to closely track and share their path towards reaching their goals. </h7></div>,
      imgUrl: beSuccessful,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 id="projects">Projects</h2>
                <p>My Recent Works</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;