import "./about.scss";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, x: -100 }} // Start hidden and off to the left
        animate={{ opacity: 1, x: 0 }} // Fade in and slide to the center
        transition={{ duration: 1 }} // Animation duration
      >
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          My name is Faithful Aborisade, and I am an aspiring full-stack developer with a strong passion for building impactful applications. I enjoy both frontend and backend development, with a focus on mastering technologies like JavaScript, Python, and machine learning. Additionally, I have experience in data visualization and am continually improving my skills in full-stack development.
        </p>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        className="tech-stack-container"
        initial={{ opacity: 0, y: 50 }} // Start hidden and move up
        animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
        transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation
      >
        <h2 className="tech-stack-title">Tech Stack</h2>
        
        <div className="tech-stack-wrapper">
          <table className="tech-stack-table">
            <thead>
              <tr>
                <th>Technology</th>
                <th>Skill Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React JS</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>HTML</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>Java</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>TensorFlow</td>
                <td>Beginner</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
};

export default About;
