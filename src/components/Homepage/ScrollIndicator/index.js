import DownArrow from "../../../assets/svgs/down.svg";
import { LargeCircle, SmallCircle } from "./styles"; 
import { motion } from "framer-motion";

const ScrollIndicator = () => {
    return(
        <LargeCircle 
            initial={{
                backgroundColor: 'rgba( 255, 255, 255, 0)'
            }}
            animate={{ 
                backgroundColor: 'rgba( 255, 255, 255, 0.3)'
            }}
            transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: "easeInOut",
            }} 
        >
            <SmallCircle 
                initial={{
                    backgroundColor: 'rgba( 255, 255, 255, 0)'
                }}
                animate={{ 
                    backgroundColor: 'rgba( 255, 255, 255, 0.5)'
                }}
                transition={{ 
                    duration: 0.4, 
                    delay: 0.4,
                    ease: "easeInOut",
                }} 
            >
                <motion.div 
                    className="svg"
                    initial={{
                        y: 0, 
                        opacity: 0
                    }}
                    animate={{
                        y: [-5, 3, -2],
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.4, 
                        ease: "easeInOut", 
                        duration: 0.8, 
                        y: {
                            yoyo: Infinity, 
                            repeatDelay: 2,
                        }
                    }}
                >
                    <DownArrow />
                </motion.div>
            </SmallCircle>
        </LargeCircle>
    )
}

export default ScrollIndicator;