import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profilePhoto from "../assets/img/profile_photo.jpg";
import { BoxArrowUpRight, Envelope } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import CV from '../assets/Good_Resume_09172025.pdf'

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
      <Container className="px-4">
        <Row className="align-items-center gx-lg-5 gy-4 gy-lg-0">
          <Col xs={12} lg={7}>
            <div className="banner-content animate__animated animate__fadeIn">
              <h1 id="about">Hi! I'm Jeffrey Li</h1>
              <div className="banner-role">{text}</div>
              <p>
                Hello! I’m a Mechatronics Engineering graduate from the University of Waterloo, currently
                working as a Data Engineer with a strong passion for software development. Throughout my
                academic and professional journey, I’ve gained experience in mechanical design, computer
                vision, machine learning, web development, and building data pipelines. I enjoy tackling
                complex problems, developing efficient and scalable solutions, and continuously expanding
                my technical skills through new projects and experiences. I’m particularly passionate about
                using technology to solve real-world problems and improve everyday life.
              </p>
              <p>
                In my leisure time, you can find me collecting rare sneakers, exploring the city of Toronto,
                lifting weights, and tailoring custom outerwear.
              </p>
              <div className="banner-actions">
                <a className="banner-action" href={CV} target="_blank" rel="noopener noreferrer">
                  Resume
                  <BoxArrowUpRight size={20} aria-hidden="true" />
                </a>
                <a className="banner-action" href="#connect">
                  Let’s Connect
                  <Envelope size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={profilePhoto} alt="Jeffrey Li" className="profile-photo" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;