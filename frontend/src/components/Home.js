import React from "react";
import { useInView } from "react-intersection-observer";
import homeStyles from "../styles/components/home.module.scss";
import photo from "../assets/photo.jpg";

// Ajouter un h1 dans cette section

const Home = () => {
  const options = {
    threshold: 0.3
  }

  const { ref: imgRef, inView: imgIsVisible } = useInView(options);

  return (
    <section className={homeStyles.homeContainer} id="home">
      <div className={homeStyles.homeWrapper}>
        <div className={homeStyles.textContainerLeft}>
          <p>Hello world !</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            veritatis totam quia officiis ullam quasi eum rem. Soluta neque
            consequatur tenetur accusantium perspiciatis, ut eligendi aspernatur
            magnam ducimus laudantium rerum!
          </p>
        </div>
        <img
          ref={imgRef}
          src={photo}
          alt="Portrait Marianne Boyer"
          className={`${homeStyles.img}
          ${imgIsVisible ? homeStyles.animateImg : ''}`}
        />
        <div className={homeStyles.textContainerRight}>
          <p>Hello world !</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            veritatis totam quia officiis ullam quasi eum rem. Soluta neque
            consequatur tenetur accusantium perspiciatis, ut eligendi aspernatur
            magnam ducimus laudantium rerum!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;