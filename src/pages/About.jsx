import React from "react";

const About = () => {
  return (
    <div>
      <h1>Aqui hablaremos un poco de nosotros</h1>
      <iframe
        className="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TUHgGK-tImY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default About;
