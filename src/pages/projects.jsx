// Projects.jsx
import { FaShip, FaImage, FaQuestionCircle, FaSun } from 'react-icons/fa';
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "NavPath - Smart India Hackathon Finalist",
      description: "Intelligent maritime navigation system using ML and real-time data",
      github: "https://github.com/Sanchit029/ShipNavigation_ML",
      live: "#",
      icon: <FaShip />,
      tags: ["Python", "Machine Learning", "Hackathon"]
    },
    {
      title: "BPE-Based Image Classification",
      description: "Novel approach to image classification using Byte Pair Encoding",
      github: "https://github.com/Sanchit029/BPE_Encoding_Image_Classification_Analysis",
      live: "#",
      icon: <FaImage />,
      tags: ["Python", "Computer Vision", "ML"]
    },
    {
      title: "React Quiz Application",
      description: "Interactive quiz app built with React and Vite, featuring real-time feedback",
      github: "github.com/Sanchit029/React_Quiz",
      live: "#",
      icon: <FaQuestionCircle />,
      tags: ["React", "Vite", "TailwindCSS"]
    },
    {
      title: "Renewable Energy with AI",
      description: "Runner-Up at Ahouba 2.0 - AI-driven tools for energy optimization",
      github: "github.com/Sanchit029/ML_Energy_Prediction",
      live: "#",
      icon: <FaSun />,
      tags: ["Python", "AI", "Energy"]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-16 px-4"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          id="projects-heading"
          className="text-3xl font-bold mb-8 bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-600 to-purple-600 
                     dark:from-blue-400 dark:to-purple-400"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
