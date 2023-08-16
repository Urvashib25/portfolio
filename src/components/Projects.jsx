import React from "react";
import ytclone from "../assets/ytclone.png";
import sushi from "../assets/sushi.png";
import reactadmin from "../assets/reactadmin.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: ytclone,
      heading:"YouTube Clone App",
      text:"Developed a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and videos can be played straight from the app.",
      href:"https://github.com/Urvashib25/YouTube-clone",
    },
    {
      id: 2,
      src: reactadmin,
      heading:"React Admin Dashboard",
      text:"Developed an application consisting of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.",
      href:"https://github.com/Urvashib25/react-admin-dashboard",
    },
    {
      id: 3,
      src: sushi,
      heading:"Restaurant Landing Page",
      text:"Created an engaging and modern user interface, utilizing CSS animations and transitions, that showcases the unique offerings and ambiance of the sushi restaurant.",
      href:"https://github.com/Urvashib25/sushi-restaurant",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen xs-sm:pt-72"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,text,heading,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                < span className="w-full px-1/2 py-3 m-4 duration-200 hover:scale-105">
                <h2 className="font-bold mb-2">{heading}</h2>
                <p className="text-gray-500">{text}</p>
                </span>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 ">
                  <a href ={href}> Learn More</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
