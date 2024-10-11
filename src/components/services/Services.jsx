import "./services.scss"
import { motion } from "framer-motion"

export const Services = () => {
  return (
    <motion.div className="services">
        <motion.div className="textContainer">
            <p>I focus on growing my knowledge and <br/> expand my business</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><b> Unique </b> Ideas</h1>
            </div>
            <div className="title">
                <h1><b> For Your </b> Business</h1>
                <button>WHAT I HAVE DONE</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam non consectetur. 
                    Voluptatum enim sit non quaerat vero nostrum! Veniam esse tempora ipsa eveniet porro neque autem cumque id repellendus.</p>
                <button>GO</button>
            </motion.div> 
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam non consectetur. 
                    Voluptatum enim sit non quaerat vero nostrum! Veniam esse tempora ipsa eveniet porro neque autem cumque id repellendus.</p>
                <button>GO</button>
            </motion.div> 
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam non consectetur. 
                    Voluptatum enim sit non quaerat vero nostrum! Veniam esse tempora ipsa eveniet porro neque autem cumque id repellendus.</p>
                <button>GO</button>
            </motion.div> 
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam non consectetur. 
                    Voluptatum enim sit non quaerat vero nostrum! Veniam esse tempora ipsa eveniet porro neque autem cumque id repellendus.</p>
                <button>GO</button>
            </motion.div> 
        </motion.div>
    </motion.div>
  )
}

export default Services
