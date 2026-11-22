import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect, useRef } from "react";

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import GithubIcon from '../assets/img/github-icon.svg';


function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const pendingSection = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  const onNavigate = (hash, event) => {
    if (!expanded || !hash || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    pendingSection.current = hash;
    setExpanded(false);
  };

  const onMenuClosed = () => {
    const hash = pendingSection.current;
    pendingSection.current = null;

    if (!hash) return;

    if (window.location.hash === hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <Navbar
      expand="lg"
      onSelect={onNavigate}
      expanded={expanded}
      onToggle={setExpanded}
      className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={(event) => onNavigate("#home", event)}>
          {/* <img src={logo} alt="Logo" /> */}
          <h1 style={{color: '#ffffff'}}>JL</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded={expanded} />
        <Navbar.Collapse id="basic-navbar-nav" onExited={onMenuClosed}>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact Me</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://github.com/jeffreyli0312" target="_blank"><img src={navIcon1} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/jeffreyli0312/" target="_blank"><img src={navIcon2} alt="LinkedIn"/></a>
            <a href="mailto:j2662li@uwaterloo.com" target="_blank"><img src={navIcon3} alt="Email"/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;