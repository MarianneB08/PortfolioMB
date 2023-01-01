import React from "react";
import { useInView } from "react-intersection-observer";
import aboutStyles from "../styles/components/about.module.scss";

const About = () => {
  const options = {
    threshold: 0.1,
  };

  const { ref: aboutRef, inView: aboutIsVisible } = useInView(options);

  return (
    <section className={aboutStyles.aboutContainer} id="about">
      <h2
        className={`${aboutStyles.aboutTitle} ${
          aboutIsVisible ? aboutStyles.aboutAnimate : ""
        }`}
        ref={aboutRef}
      >
        À propos
      </h2>
      <p className={aboutStyles.aboutText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit iste ut
        debitis laboriosam dignissimos quidem, at ab et. Itaque veritatis
        architecto nostrum animi soluta modi et voluptate, necessitatibus
        minima, suscipit, nisi iste deserunt illo rem aperiam dolore fuga.
        Laborum, nobis! Ab saepe soluta voluptatem itaque beatae recusandae
        molestiae repudiandae, aspernatur temporibus vel necessitatibus veniam
        unde quidem earum quibusdam ducimus tenetur. Non laboriosam dignissimos
        quod voluptatum magni fugiat vitae laudantium itaque saepe doloremque!
        Consectetur aperiam praesentium quo atque accusantium, explicabo quidem
        distinctio dignissimos expedita culpa nostrum tempora veritatis
        consequuntur perferendis impedit nihil aliquid iusto ea possimus
        exercitationem eaque? Ipsam impedit quo harum reiciendis quibusdam
        soluta nam inventore vitae dolores tempora dolorum accusamus ut minus
        distinctio, quae veritatis rem, iste illum commodi nostrum repudiandae
        amet architecto adipisci. Atque, odio. Temporibus quam, id rerum
        provident veritatis ducimus deserunt suscipit non iure adipisci fugit
        ipsam, cupiditate nulla optio odio ullam vel ut eligendi repellendus
        repudiandae a! Eveniet, exercitationem.
      </p>
    </section>
  );
};

export default About;