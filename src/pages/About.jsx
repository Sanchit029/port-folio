import { FaFileDownload } from "react-icons/fa";
import AnimateOnScroll from "../components/AnimateOnScroll";

function About() {
  return (
    <section id="about" className="py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500" />
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#000000_12%,transparent_12.5%,transparent_87%,#000000_87.5%,#000000_100%)] bg-[length:8px_8px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            About Me
          </h2>

          <div className="space-y-8">
            {/* Education Card */}
            <AnimateOnScroll>
              <div
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 
                       shadow-lg transition-all duration-300 hover:shadow-xl 
                       hover:translate-y-[-2px] border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="font-medium text-lg">
                    Indian Institute of Information Technology Senapati, Manipur
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bachelor of Technology in Computer Science
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sep. 2022 – May 2026
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Skills Card */}
            <AnimateOnScroll>
              <div
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 
                       shadow-lg transition-all duration-300 hover:shadow-xl 
                       hover:translate-y-[-2px] border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Languages</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Python, React.js, C, HTML/CSS, JavaScript, C++
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Tools & Technologies</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Linux, GitHub, MacOS, VS Code, Jupyter Notebook
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Resume Button */}
            <AnimateOnScroll>
              <div className="flex justify-center mt-8">
                <a
                  href="/assets/CV-Sanchit.pdf"
                  download="Sanchit_Bishnoi_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl
                       active:transform active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileDownload className="animate-bounce" />
                  Download Resume
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default About;
