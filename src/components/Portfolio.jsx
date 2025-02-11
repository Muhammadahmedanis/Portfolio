import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
  {
    id: 1,
    title: "Frontend Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium! Officiis enim commodi nesciunt voluptas quis tenetur id ut, sint molestiae nobis eveniet, at aliquam ipsum, laboriosam fuga voluptate harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium! Officiis enim commodi nesciunt voluptas quis tenetur id ut, sint molestiae nobis eveniet, at aliquam ipsum, laboriosam fuga voluptate harum?",
    tech: "HTML5, CSS3, JavaScript",
    liveLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Backend Project",
    description:
      "A robust backend system designed for handling complex API requests and database operations efficiently.",
    tech: "Node.js, Express.js, MongoDB",
    liveLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1606761568498-4e00f600b7e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Full-Stack Project",
    description:
      "A complete web application with both frontend and backend integration.",
    tech: "React, Node.js, Tailwind CSS",
    liveLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="portfolio" className="mx-auto p-5 bg-gray-700">
      <h1 className="text-4xl text-center font-bold mb-8 ">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Side - Project Details */}
        <div className="portfolio-box bg-gray-700 p-6 rounded-lg">
          <p className="num text-6xl text-green-400 font-bold mb-6">
            {`0${projects[activeIndex].id}`}
          </p>
          <h3 className="text-3xl text-white font-bold mb-3">
            {projects[activeIndex].title}
          </h3>
          <p className="text-lg text-gray-300">{projects[activeIndex].description}</p>
          <div className="tech my-4 border-b-2 border-white pb-3 text-green-400">
            <p>{projects[activeIndex].tech}</p>
          </div>
          <div className="github flex gap-4">
            <a
              href={projects[activeIndex].liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center rounded-full px-4 py-2 bg-gray-500 hover:bg-gray-400 transition text-white"
            >
              <MdOutlineArrowOutward size={22} />
              <span>Live Project</span>
            </a>
            <a
              href={projects[activeIndex].githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center rounded-full px-4 py-2 bg-gray-500 hover:bg-gray-400 transition text-white"
            >
              <ImGithub size={22} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-full">
          <Carousel
            infiniteLoop
            // autoPlay
            // interval={4000}
            showThumbs={false}
            showStatus={false}
            onChange={handleSlideChange}
          >
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg max-h-[410px]"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Portfolio