import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <>
      <title>My Portfolio</title>
      <Fragment>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </Fragment>
    </>
  );
}
