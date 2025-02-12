import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import project1 from '../assets/Blog.png'
import project2 from '../assets/BMS.png'
import project3 from '../assets/Disney.png'
import project4 from '../assets/Popcorn.png'
import project5 from '../assets/Food.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
  {
    id: 1,
    title: "Blog Spark",
    description:
      "𝐀 𝐌𝐄𝐑𝐍 𝐒𝐭𝐚𝐜𝐤 𝐌𝐚𝐫𝐯𝐞𝐥 – 𝐃𝐞𝐬𝐢𝐠𝐧𝐞𝐝 𝐭𝐨 𝐂𝐚𝐩𝐭𝐢𝐯𝐚𝐭𝐞 𝐑𝐞𝐚𝐝𝐞𝐫𝐬 & 𝐄𝐦𝐩𝐨𝐰𝐞𝐫 𝐖𝐫𝐢𝐭𝐞𝐫𝐬!⁣⁣  A fully responsive, dynamic blogging hub where seamless user experience meets cutting-edge tech. Perfect for writers, readers, and admins, this platform redefines blogging with reaci time interaction, infinite scrolling, and robust content management",
    tech: "React JS, Node JS, Express JS, Mongo DB",
    liveLink: "https://blog-spark.vercel.app",
    linkedinLink: "https://www.linkedin.com/posts/muhammad-ahmed-88b843202_mernstack-fullstackdevelopment-reactjs-activity-7293717014102130688-bK8F?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO83SsBrXSz27QRSu3Q4wFej7dXsE72Azg",
    githubLink: "https://github.com/Muhammadahmedanis/BlogSpark",
    image: project1,
  },
  {
    id: 2,
    title: "Beneficiary Management Sys",
    description:
      "The Beneficiary Management System optimizes beneficiary workflows via role-based access: Receptionists register beneficiaries using tokens/QR codes, managers update statuses (Completed/Rejected), and admins monitor real-time analytics. Role segregation ensures secure, transparent, and efficient tracking of registrations, approvals, and rejections.",
    tech: "React JS, Node JS, Express JS, Mongo DB",
    liveLink: "https://hackton-frontend-sandy.vercel.app",
    linkedinLink: "https://www.linkedin.com/posts/muhammad-ahmed-88b843202_coding-hr-javascript-activity-7290623993928146944-8ZQV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO83SsBrXSz27QRSu3Q4wFej7dXsE72Azg",
    githubLink: "https://github.com/Muhammadahmedanis/HacktonFrontend",
    image: project2,
  },
  {
    id: 3,
    title: "Disney Clone",
    description:
      "Disney Clone is a React-based web app simulating a Disney-themed platform for browsing popular movies. Utilizing React Router for seamless navigation, styled-components for dynamic CSS, and Redux Toolkit for efficient state management (via mock data), it offers a responsive, component-driven UI. Features include modular design, interactive routing, and visually consistent styling across devices.",
    tech: "React Js, Firebase, Redux-Toolkit",
    liveLink: "https://disnyclone.netlify.app",
    linkedinLink: "https://www.linkedin.com/posts/muhammad-ahmed-88b843202_react-javascript-coding-activity-7251606933256720384-v-lN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO83SsBrXSz27QRSu3Q4wFej7dXsE72Azg",
    githubLink: "https://github.com/Muhammadahmedanis/DisneyClone",
    image: project3,
  },
  {
    id: 4,
    title: "Pop corn",
    description:
      "Popcorn is a React-based application designed for movie enthusiasts to search, rate, and organize films. It integrates a Movie API to fetch real-time data. Users can search titles, view detailed movie information, rate favorites, and customize watchlists by adding/removing entries. The app prioritizes ease of use with dynamic UI elements and streamlined workflows, enhancing the movie discovery and experience.",
    tech: "React JS, Tailwind CSS",
    liveLink: "https://usepopcorm.netlify.app/",
    linkedinLink: "https://www.linkedin.com/posts/muhammad-ahmed-88b843202_react-javascript-coding-activity-7251606933256720384-v-lN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO83SsBrXSz27QRSu3Q4wFej7dXsE72Azg",
    githubLink: "https://github.com/Muhammadahmedanis/PopCorn",
    image: project4,
  },
  {
    id: 5,
    title: "Meal Hub",
    description:
      "A responsive food website, offers a seamless experience for both customers and administrators. Admins can manage restaurants and food dishes while monitoring real-time orders. Customers placing food orders, reserving tables, and tracking deliveries. The platform streamlines food delivery through dynamic features like order status updates and instant admin-customer workflow integration.",
    tech: "Html, Css JavaScript, Firebase",
    liveLink: "https://mealwheels.netlify.app",
    linkedinLink: "https://www.linkedin.com/posts/muhammad-ahmed-88b843202_fullstackdevelopment-javascript-coding-activity-7233436944116965377-QP8p?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO83SsBrXSz27QRSu3Q4wFej7dXsE72Azg",
    githubLink: "https://github.com/Muhammadahmedanis/foodDeliveryWeb-2",
    image: project5,
  },
];

// {
//   id: 6,
//   title: "Hiring Mine",
//   description:
//     "Hiring Mine is a React-based job platform enabling users to explore job listings and view detailed descriptions. It leverages Axios to fetch real-time job data. The app simplifies job discovery with organized listings, in-depth role insights, and smooth page infnite transitions, offering a user-friendly experience mirroring professional job portals.",
//   tech: "React JS, Redix-Toolkit, Material-UI",
//   liveLink: "",
//   linkedinLink: "https://www.linkedin.com/posts/muhammad-ahmed-88b843202_react-frontend-react-activity-7259232691114401793-c58r?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO83SsBrXSz27QRSu3Q4wFej7dXsE72Azg",
//   githubLink: "https://github.com/Muhammadahmedanis/HiringMineClone",
//   image: project6,
// },

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="portfolio" className="mx-auto p-5 bg-[#dcddf8]">
     <div className="text-center mb-10">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-50">
            <div className="w-96 h-96 bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 rounded-full blur-3xl" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Portfolio
          </h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Side - Project Details */}
        <div className="portfolio-box bg-[#b6b6ef] p-6 rounded-lg order-last md:order-first">
          <p className="num text-6xl text-[#3f3082] py-5 font-bold mb-6">
            {`0${projects[activeIndex].id}`}
          </p>
          <h3 className="text-3xl text-white font-bold mb-3">
            {projects[activeIndex].title}
          </h3>
          <p className="text-lg text-[#3f3082]">{projects[activeIndex].description}</p>
          <div className="tech my-4 border-b-2 border-white pb-3 text-white">
            <p>{projects[activeIndex].tech}</p>
          </div>
          <div className="github flex gap-4">
            <a
              href={projects[activeIndex].liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center rounded-full px-4 py-2 bg-[#261e57] hover:bg-gray-400 transition text-white"
            >
              <MdOutlineArrowOutward size={22} />
              <span>Live Project</span>
            </a>
            <a
              href={projects[activeIndex].githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center rounded-full px-4 py-2 bg-[#261e57] hover:bg-gray-400 transition text-white"
            >
              <ImGithub size={22} />
              <span>GitHub</span>
            </a>
            <a
              href={projects[activeIndex].linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center rounded-full px-4 py-2 bg-[#261e57] hover:bg-gray-400 transition text-white"
            >
              <FaLinkedinIn size={22} />
              <span>Linkedin</span>
            </a>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-full">
          <Carousel
            infiniteLoop
            autoPlay
            interval={5000}
            showThumbs={false}
            showStatus={false}
            onChange={handleSlideChange}
          >
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full h-auto md:h-96 lg:h-[420px] object-cover"
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