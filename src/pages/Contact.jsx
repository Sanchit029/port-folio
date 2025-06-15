import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent 
                        bg-gradient-to-r from-blue-600 to-purple-600">
            Contact
          </h2>
          <p className="mb-6">Feel free to reach out via:</p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:sanchitbishnoi029@gmail.com" className="hover:underline">
                sanchitbishnoi029@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" />
              <a href="tel:+917014658998" className="hover:underline">
                +91 7014658998
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-blue-500" />
              <a href="https://github.com/Sanchit029" className="hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-blue-500" />
              <a href="https://www.linkedin.com/in/sanchit-bishnoi/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>V.P.O Sadhuwali, Sri Ganganagar(335001), Rajasthan</span>
            </li>
          </ul>
        </AnimateOnScroll>
      </div>
    </section>
  );
}