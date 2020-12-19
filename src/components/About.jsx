import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <img
        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        className="about-img"
      />
      <div className="about-info">
        <h1 className="name">
          Hi, I am <span>Vasanthan</span>
        </h1>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          repudiandae dolor tenetur, sint repellendus molestiae dolorem labore
          inventore voluptas voluptates nemo enim praesentium doloribus facere
          aliquam dicta quia aperiam. Ipsum?
        </p>
      </div>
    </div>
  );
}

export default About;
