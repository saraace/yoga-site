import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

/* STYLES */
import { Laptop, SeqWrapper, Text } from "./styles"; 

/* COMPONENTS */
import ImageSequence from "../../../ImageSequence";

// Image sequence images
import LaptopImages from "./images";

const LaptopSequenceMobile = ({ width, height, progress, duration, x, y, sw, sh, offsetStyles, content, ...rest }) => {

    // sequence images
    const imageSequence = LaptopImages();

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // framer motion value for scene progress
    const sceneProgress = useMotionValue(0);

    useEffect(() => {

        // set motion value
        sceneProgress.set(progress);

        if(progress >= 0.45){ 

            // current id
            const id = Math.round(((progress-0.45) * duration) * 0.25);

            if(id <= imageSequence.length){   
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                setCanvasImage(imageSequence.length);
            }

        } 
        else{
            setCanvasImage(0);
        }

    }, [progress]);
    
    // heading
    const heading = {
        initial: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeOut" } },
        animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
        exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeOut" } }
    };

    const headingY = useTransform(sceneProgress, [0.55, 0.6875], [0, (height/2)*-1]);
    const headingOpacity = useTransform(sceneProgress, [0.65, 0.67], [1, 0]);


    return(
        <Laptop {...rest}>
            <SeqWrapper>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <AnimatePresence> 
            {progress > 0.51 && (
                <Text initial="initial" animate="animate" exit="exit">
                    <motion.h1 style={{ y: headingY, opacity: headingOpacity }}>
                        <div>
                            <motion.span variants={heading}>{ content }</motion.span>
                        </div>
                    </motion.h1>
                </Text>
            )}
            </AnimatePresence>
        </Laptop>
    )
}

export default LaptopSequenceMobile;