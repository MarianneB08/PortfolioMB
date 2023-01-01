import React from "react";
import { useInView } from "react-intersection-observer";
import workStyles from "../styles/components/work.module.scss";
import Card from "./Card";

const Work = () => {
  const options = {
    threshold: 0.3,
  };

  const { ref: workRef, inView: workIsVisible } = useInView(options);

  return (
    <section className={workStyles.workContainer} id="work">
      <h2
        className={`${workStyles.workTitle} ${
          workIsVisible ? workStyles.workAnimate : ""
        }`}
        ref={workRef}
      >
        Projets
      </h2>
      <Card />
    </section>
  );
};

export default Work;