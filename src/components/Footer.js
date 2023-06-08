import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer(){
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <Navbar.Brand href="#home">
          {/* <img src={logo} alt="Logo" /> */}
          <h1 style={{color: '#ffffff'}}>JL</h1>
        </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/jeffreyli0312" target="_blank"><img src={navIcon1} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/jeffreyli0312/" target="_blank"><img src={navIcon2} alt="LinkedIn" /></a>
              <a href="mailto:j2662li@uwaterloo.com" target="_blank"><img src={navIcon3} alt="Email" /></a>
            </div>
            <p>© 2023 Jeffrey Li. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;