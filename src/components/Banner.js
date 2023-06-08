import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headerImg from "../assets/img/header-img.svg";
import test from "../assets/img/grad.PNG";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { HashLink } from 'react-router-hash-link';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CV from '../assets/Resume_Winter2023.pdf'
import newTab from "../assets/img/icons8-new-tab.svg";

function Banner () {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full-Stack Developer", "Backend Developer", "Mechatronics Engineer" ];
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
                <h1 className="typeAnimation"><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full-Stack Developer", "Backend Developer", "Mechatronics Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Hello! I am a second year Mechatronics student at the University of Waterloo with a strong passion for software development. Throughout my academic journey, I’ve gained experience in mechanical design, computer vision, 
                    machine learning, and web development. Alongside a strong commitment to academic excellence, I actively seek to enhance my problem-solving skills with new projects, work experiences, and environments. I’m particularly 
                    interested in building games, applications, and platforms that have the potential to help others, elevate quality of life, and even inspire positive global change. As a motivated team member, I consistently strive to 
                    exceed expectations and push beyond boundaries. In my leisure time, you can find me collecting rare sneakers, playing competitive table tennis, and tailoring custom outerwear.
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
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* <img src={headerImg} alt="Header Img"/> */}
                  <img src={test} alt="Header Img" style={{width: '350px', height: 'auto', borderRadius: '10%', marginLeft: '70px', marginTop: '25px', objectFit: 'contain'}} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;