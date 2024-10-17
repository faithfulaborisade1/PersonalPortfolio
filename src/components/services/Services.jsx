import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on improving my skills
          <br /> as a fullstack developer
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Future
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Projects </motion.b> Ideas.
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI Powerd Finace App</h2>
          <p>
          A comprehensive finance app offering AI-driven insights, 
          tools for freelancers and gig workers, financial wellness coaching, 
          and smart debt management. It emphasizes financial data privacy and security, 
          automated savings and investments, collaborative financial planning, and subscription management.
          </p>
          <button>Comming Soon</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>E-commerce Website</h2>
          <p>
          An intuitive e-commerce platform designed to provide a seamless shopping experience, 
          offering a wide range of products across various categories. The website features 
          secure payment options, real-time order tracking, personalized recommendations,
           and user-friendly navigation.
          </p>
          <button>Comming Soon</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Autonomous Smart Surveillance Drone Project</h2>
          <p>
          Designing and developing an autonomous drone for smart surveillance tasks, integrating real-time object tracking and video processing using AI algorithms.
           The drone utilizes machine learning techniques for object detection and tracking, with data processing hosted in the cloud.
          </p>
          <button>Comming Soon</button>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;