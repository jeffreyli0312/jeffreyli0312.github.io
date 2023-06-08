import python from "../assets/img/icons8-python.svg";
import c from "../assets/img/icons8-c.svg";
import java from "../assets/img/icons8-java.svg";
import javascript from "../assets/img/icons8-js.svg";
import html from "../assets/img/icons8-html.svg";
import css from "../assets/img/icons8-css.svg";
import mongodb from "../assets/img/icons8-mongodb.svg";
import excel from "../assets/img/icons8-excel.svg";
import snowflake from "../assets/img/icons8-snowflake.svg";
import sql from "../assets/img/icons8-sql.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" style={{marginTop: '0px'}}>
                        <h2 style={{marginBottom: '50px'}}>Professional Skillset</h2>
                        {/* <p>Some of the skills I've learned throughout my career:</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={c} style={{height: 'auto'}} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>ReactJS/NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={sql} style={{height: 'auto', width: '38%'}} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={excel} alt="Image" />
                                <h5>VBA</h5>
                            </div>
                            <div className="item">
                                <img src={snowflake} style={{marginTop:'5%', marginBottom: '8%', height: 'auto', width: '50%'}}  alt="Image" />
                                <h5>Snowflake</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}

export default Skills;