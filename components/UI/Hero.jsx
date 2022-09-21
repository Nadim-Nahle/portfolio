import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import nadim from "../../public/images/nadim.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Nadim Nahle</h2>
              <h5 className="mb-4">Full Stack Developer</h5>
              <p>
                My name is Nadim Nahle, I am an Ambitious Full Stack developer
                with great love and passion for programming and software
                development. I am currently located in Lebanon where I have been
                developing my web programming skills and discovering various
                languages and frameworks. My experience includes working on
                multiple full stack projects using HTML, CSS, PHP, React.js,
                Laravel, Node.js. I have freelance experience in WordPress web
                development. I spend most of my free time learning new coding
                languages and frameworks or playing sports.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://www.linkedin.com/in/nadim-nahle/">
                    <a target="_blank">Hire me</a>
                  </Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://drive.google.com/file/d/1wZuW86NiKV1RcR4KJ_iOF-je-mZbjX3D/view?usp=sharing">
                    <a target="_blank">Download CV</a>
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={nadim} width="300" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
