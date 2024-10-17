// import ToggleButton from "./toggleButton/ToggleButton"
 import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/faithful-aborisade-105616223/">
            <img src="/link.png" alt=""  />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/tw.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;