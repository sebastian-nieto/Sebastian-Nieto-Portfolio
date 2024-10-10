import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a third year student at the University of Calgary pursuing my Bachelor's in Software Engineering.`;


export const PROJECTS = [
  {
    title: "La-Liga Analyzed",
    image: project1,
    description:
      "LaLiga Analyzed is a in-the-works, passion project of mine which aims to provide fans, analysts, and enthusiasts with comprehensive statistics on LaLiga players. This Spring Boot application utilizes web-scraped data, stored to a PostgreSQL database, which is then dynamically displayed using React and JavaScript.",
    technologies: ["Python", "PostGresSQL", "React", "SpringBoot",],
  },
  {
    title: "Ducky",
    image: project2,
    description:
      "Ducky is a portable handheld video game console that I developed with a team using Arduino. I worked on programming the gameplay, sound effects, and live score tracking. We also designed a custom 3D-printed casing in Fusion 360, optimizing the placement of components for a compact and functional design.",
    technologies: ["C++", "Fusion360", "Arduino"],
  },
  {
    title: "E-Commerce Clone",
    image: project3,
    description:
      "Tasked as a school project, my group and I developed an E-Commerce platform clone that allowed users to sign up, log in, manage their shopping carts, and view detailed product information. We developed both the front-end and back-end, integrating a RESTful API to handle user requests and data.",
    technologies: ["React", "Flask", "JavaScript"],
  },
];
