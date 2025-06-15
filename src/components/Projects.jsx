import React from "react";

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "This is a brief description of Project One.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is a brief description of Project Two.",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is a brief description of Project Two.",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is a brief description of Project Two.",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
];

const Projects = () => {
  return (
    <section className="" id="projects"  style={{ backgroundColor: "rgb(0 0 0 / 10%)"}}>
        <div className="flex justify-center p-4"  style={{ backgroundColor: "white"}}>
            <h5 className="text-3xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105 underline decoration-green-500">
                My Projects
            </h5>
        </div>
        <hr className="p-2" style={{ borderTop: '1px solid black',backgroundColor: "white"}} />

      <div className="mx-auto p-5" >
        <div className="grid md:grid-cols-2 gap-8" style={{margin:"10px",backgroundColor:"white",borderRadius:"10px",padding:"10px"}}>
          {projects.map((project) => (
            <div key={project.id} className="p-5 rounded-lg shadow-lg">
              <video
                src={project.video}
                controls
                className="w-full h-48 object-cover rounded-lg mb-4"
              ></video>
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-800">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
