import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-8">
      <h1 className="text-center text-7xl mb-10">Projects</h1>

      <div>
        {PROJECTS.map((project, index) => ( 
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 flex justify-center"> 
              <img 
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="font-semibold mb-2">{project.title}</h6>
              <p className=" mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span 
                      key={index} 
                      className="mr-2 bg-neutral-900 rounded-full px-2 py-1 text-sm font-medium"
                    >
                      <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent">
                        {tech}
                      </span>
                    </span>

                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;