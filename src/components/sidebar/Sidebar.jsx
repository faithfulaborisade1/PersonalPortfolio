
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import { motion } from "framer-motion"
import { useState } from "react"
import { Links } from "./links/Links"

const variants = {
    open:{
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            delay:0,
            type:"spring",
            stiffness:  30,
            damping:40
        }
    },
    closed:{
        clipPath:"circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:  400,
            damping:40
        }
    }
}

export const Sidebar = () => {
    const [open, setOpen] = useState(false)


  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
