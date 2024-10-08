import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a third year student at the University of Calgary pursuing my Bachelor's in Software Engineering.`;


export const PROJECTS = [
  {
    title: "La-Liga Analyzed",
    image: project1,
    description:
      "LaLiga Analyzed is a in-the-works, passion project of mine which aims to provide fans, analysts, and enthusiasts with comprehensive statistics on LaLiga players. This Spring Boot application utilizes web-scraped data, stored to a PostgreSQL database, dynamically displaying the data online.",
    technologies: ["Python", "PostGresSQL", "React", "Spring Boot",],
  },
  {
    title: "Handheld Game Console",
    image: project2,
    description:
      "Developed a portable handheld game console using Arduino, programming gameplay, sound effects, and live score tracking. Overcame technical challenges in circuit design and component integration to ensure stability and portability. Designed a custom 3D-printed casing with Fusion 360, optimizing component placement for enhanced compactness and functionality.",
    technologies: ["C++", "Fusion360", "Arduino"],
  },
  {
    title: "E-Commerce Platform",
    image: project3,
    description:
      "Developed an E-commerce platform that allows users to sign up, log in, manage shopping carts, and view detailed product information. Collaborated with a team to create both front-end and back-end components, successfully integrating a RESTful API to enhance functionality and user experience.",
    technologies: ["React", "Flask", "JavaScript"],
  },
];
