import "./services.scss"
import { animate, motion, useInView } from "framer-motion"
import { useRef } from "react";


const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1, 
        },

    },
};

export const Services = () => {

  const ref = useRef()

  const isInView =  useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial="initial"  /*animate="animate" whileInView="animate"*/ref={ref} animate={isInView && "animate"} >
        <motion.div className="textContainer"  variants={variants}>
            <p>I focus on growing my knowledge and <br/> expand my business</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer"  variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}> Unique </motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}> For Your </motion.b> Business</h1>
                <button>WHAT I HAVE DONE</button>
            </div>
        </motion.div>
        <motion.div className="listContainer"  variants={variants}>
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
