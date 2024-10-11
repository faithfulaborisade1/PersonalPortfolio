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
                <motion.h1 variants={textVariants}>Web developer and Machine Learning</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Work</motion.button>
                    <motion.button variants={textVariants}>Contact me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContanier" variants={sliderVariants} initial="initial" animate="animate">
            Soon To Be Graduate
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="hero image" />
        </div>
    </div>
  )
}

export default Hero 
