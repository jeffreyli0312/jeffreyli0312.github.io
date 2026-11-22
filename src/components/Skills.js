import python from "../assets/img/icons8-python.svg";
import sql from "../assets/img/icons8-sql.svg";
import excel from "../assets/img/icons8-excel.svg";
import javascript from "../assets/img/icons8-js.svg";
import html from "../assets/img/icons8-html.svg";
import css from "../assets/img/icons8-css.svg";

import { Image as ImageIcon } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const customImages = require.context("../assets/img", false, /^\.\/skill-[a-z-]+\.png$/);
const imagesByFilename = Object.fromEntries(
  customImages.keys().map((filename) => [filename, customImages(filename)])
);

const skills = [
  { name: "Python/PySpark", image: python },
  { name: "Databricks", image: imagesByFilename["./skill-databricks.png"] },
  { name: "SQL", image: sql },
  { name: "Oracle", image: imagesByFilename["./skill-oracle.png"] },
  { name: "AWS", image: imagesByFilename["./skill-aws.png"] },
  { name: "Excel", image: excel },
  { name: "Git", image: imagesByFilename["./skill-git.png"] },
  { name: "Kiro/Skills", image: imagesByFilename["./skill-kiro.png"] },
  { name: "ReactJS/NodeJS", image: javascript },
  { name: "HTML", image: html },
  { name: "CSS", image: css },
];

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
            <div className="skill-bx wow zoomIn" style={{ marginTop: 0 }}>
              <h2 style={{ marginBottom: '50px' }}>Professional Skillset</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map(({ name, image }) => (
                  <div className="item" key={name}>
                    <div className="skill-icon">
                      {image ? <img src={image} alt="" /> : <ImageIcon size={32} aria-hidden="true" />}
                    </div>
                    <h5>{name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
