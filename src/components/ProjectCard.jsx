// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ title, description, github, live, tags, icon, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 
                 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] 
                 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl text-blue-500 dark:text-blue-400">
          {icon}
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full 
                       bg-blue-100 dark:bg-blue-900/30 
                       text-blue-600 dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 
                     group-hover:text-blue-600 dark:group-hover:text-blue-400 
                     transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="flex gap-4">
        <a 
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 
                     hover:underline"
          aria-label={`View source code for ${title}`}
        >
          <FaGithub /> View Code
        </a>
        {live !== "#" && (
          <a 
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-600 
                       dark:text-purple-400 hover:underline"
            aria-label={`View live demo for ${title}`}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;