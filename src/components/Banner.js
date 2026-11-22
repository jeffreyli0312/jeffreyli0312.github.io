import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headerImg from "../assets/img/header-img.svg";
import test from "../assets/img/profile_photo.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { HashLink } from 'react-router-hash-link';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CV from '../assets/Good_Resume_09172025.pdf'
import newTab from "../assets/img/icons8-new-tab.svg";

function Banner () {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Engineer", "Software Developer", "Mechatronics Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(150);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="animate__animated animate__fadeIn">
                {/* <span className="tagline" id="about">Welcome to my Portfolio</span> */}
                <h1 id="about">{`Hi! I'm Jeffrey Li `} </h1>
                <h1 className="typeAnimation"><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Engineer", "Software Developer", "Mechatronics Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Hello! I’m a Mechatronics Engineering graduate from the University of Waterloo, currently 
                    working as a Data Engineer with a strong passion for software development. Throughout my 
                    academic and professional journey, I’ve gained experience in mechanical design, computer 
                    vision, machine learning, web development, and building data pipelines. I enjoy tackling 
                    complex problems, developing efficient and scalable solutions, and continuously expanding 
                    my technical skills through new projects and experiences. I’m particularly passionate about 
                    using technology to solve real-world problems and improve everyday life.

                    In my leisure time, you can find me collecting rare sneakers, exploring the city of Toronto, 
                    lifting weights, and tailoring custom outerwear.
                  </p>

                  <div>
                  <a href={CV} target= 'blank'>
                    <button style={{marginTop: '10px', float:'left',  marginRight: '20px', padding: '10px 10px 12px 10px', border: '1px solid white'}}>
                      Resume<img src={newTab} style={{height: 'auto', width:'20%', animation: 'none', marginLeft: '6px'}}></img>
                    </button>
                  </a>
                  
                    <Navbar.Brand href="#connect">
                      <button style={{ marginTop: '10px', float:'left', display:'inline', padding: '10px 10px 10px 0px'}}>Let’s Connect<ArrowRightCircle size={25} /></button>
                      {/* <ArrowRightCircle size={25} /> */}
                    </Navbar.Brand>
                  </div>



                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="text-center text-md-end">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* <img src={headerImg} alt="Header Img"/> */}
                  <img
                    src={test}
                    alt="Jeffrey Li"
                    className="profile-photo"
                    style={{ marginTop: '15px', objectFit: 'contain' }}
                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;