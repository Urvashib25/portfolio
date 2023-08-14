import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I'm Urvashi, currently a final year student at D.J. Sanghvi College of Engineering. 
        My journey into the world of web development began as a curious student, seeking to understand the magic behind the websites I visited. 
        I quickly found myself immersed in the realm of HTML, CSS, and JavaScript, discovering how these languages could breathe life into digital spaces. 
        Through this course, I've been gaining a solid foundation in programming principles, user interface design, and the art of crafting engaging web experiences.
        </p>

        <br />

        <p className="text-xl">
        I've embarked on projects that have challenged and enriched my abilities. 
        My journey is not just about the technologies, but also about understanding the intricate dance between design and functionality.
        Every challenge I encounter becomes an opportunity for growth.
        With each step forward, I'm committed to pushing my boundaries, constantly learning, and evolving as a front-end developer.
        </p>
      </div>
    </div>
  );
};

export default About;
