// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function AnimateOnScroll({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true, 
        margin: "0px 0px -200px 0px",  // Adjusted margin to trigger earlier
        amount: 0.1  // Only needs 20% of element to be visible
      }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}

AnimateOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number
};

export default AnimateOnScroll;