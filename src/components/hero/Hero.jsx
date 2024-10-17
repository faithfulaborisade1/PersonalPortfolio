import { motion } from "framer-motion"
import  "./hero.scss"

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

export const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Faithful Aborisade</motion.h2>
                <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}><a href="#Portfolio">See the Latest Work</a></motion.button>
                    <motion.button variants={textVariants}> <a href="#Contact">Contact me</a></motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="#Parallax" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContanier" variants={sliderVariants} initial="initial" animate="animate">
            Soon To Be Graduate
            
        </motion.div>
        {/* <div className="imageContainer">
            <h2>About me</h2>
            <h1>I'm a passionate software design and AI enthusiast, currently in my
                 final year of studying cloud computing with AI. With hands-on experience 
                 in developing innovative solutions, I'm eager to leverage my technical skills 
                 and project experience to solve real-world problems. I thrive in dynamic,
                  fast-paced environments and continuously seek opportunities to grow and make a meaningful impact in the tech industry.</h1>
            <img src="/hero.png" alt="hero image" />
        </div> */}
    </div>
  )
}

export default Hero 
