import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

/* STYLES */
import { Laptop, SeqWrapper, VideoLoopWrapper, Text } from "./styles"; 

/* COMPONENTS */
import ImageSequence from "../../ImageSequence";

// Image sequence images
import LaptopImages from "./images";

const LaptopSequence = ({ width, height, progress, duration, x, y, sw, sh, offsetStyles, ...rest }) => {

    // laptop loop 
    const laptopLoopRef = useRef(null);

    // laptop loop state
    const [ laptopVideoReady, setLaptopVideoReady ] = useState(false);
    const [ laptopPlaying, setLaptopPlaying ] = useState(false);

    // sequence images
    const imageSequence = LaptopImages();

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // framer motion value for scene progress
    const sceneProgress = useMotionValue(0);

    useEffect(() => {
        if(laptopLoopRef.current){

            // once ready set state
            laptopLoopRef.current.addEventListener("loadeddata", () => {
                setLaptopVideoReady(true);
            });

        }
    }, [laptopLoopRef]); 

    useEffect(() => {

        // set motion value
        sceneProgress.set(progress);

        if(progress >= 0.45){ 

            // pause laptop video
            setLaptopPlaying(false);

            // current id
            const id = Math.round(((progress-0.45) * duration) * 0.25);

            if(id <= 239){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play laptop video
                setLaptopPlaying(true);
                setCanvasImage(239);
            }

        } 
        else{
            setLaptopPlaying(false);
            setCanvasImage(0);
        }

    }, [progress]);

    useEffect(() => {
        if(laptopVideoReady && laptopPlaying){
            laptopLoopRef.current.play();
        } else{
            laptopLoopRef.current.pause();
        }
    }, [laptopVideoReady, laptopPlaying]); 

    // ease
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
    
    // "Enjoy classes from your laptop" heading
    const heading = {
        animate: { transition: { delayChildren: 0, staggerChildren: 0.04, staggerDirection: 1 } },
        exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeOut" } }
    };

    // heading letters
    const letter = {
        initial: { y: 100 },
        animate: { y: 0, transition: { duration: 0.3, ...transition } }
    };

    const headingY = useTransform(sceneProgress, [0.55, 0.6875], [0, (height/2)*-1]);
    const headingOpacity = useTransform(sceneProgress, [0.65, 0.67], [1, 0]);


    return(
        <Laptop {...rest}>
            <SeqWrapper className={laptopPlaying? "" : "front"}>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <VideoLoopWrapper className={laptopPlaying? "front" : ""}>
                <img src="/images/homepage/laptop-seq/laptop_seq_00240.png" style={offsetStyles} />
                <video ref={laptopLoopRef} src="/images/homepage/laptop-seq/laptop_loop.mp4" style={offsetStyles} muted loop />
            </VideoLoopWrapper>
            <AnimatePresence> 
            {progress > 0.51 && (
                <Text initial="initial" animate="animate" exit="exit">
                    <motion.h1 style={{ y: headingY, opacity: headingOpacity }}>
                        <div>
                            <motion.span variants={heading}>
                                <motion.span variants={letter}>E</motion.span>
                                <motion.span variants={letter}>n</motion.span>
                                <motion.span variants={letter}>j</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>y</motion.span>
                                <motion.span variants={letter}>&nbsp;</motion.span>
                                <motion.span variants={letter}>c</motion.span>
                                <motion.span variants={letter}>l</motion.span>
                                <motion.span variants={letter}>a</motion.span>
                                <motion.span variants={letter}>s</motion.span>
                                <motion.span variants={letter}>s</motion.span>
                                <motion.span variants={letter}>e</motion.span>
                                <motion.span variants={letter}>s</motion.span>
                                <motion.span variants={letter}>&nbsp;</motion.span>
                                <motion.span variants={letter}>f</motion.span>
                                <motion.span variants={letter}>r</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>m</motion.span>
                                <motion.span variants={letter}>&nbsp;</motion.span>
                                <motion.span variants={letter}>y</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>u</motion.span>
                                <motion.span variants={letter}>r</motion.span>
                                <motion.span variants={letter}>&nbsp;</motion.span>
                                <motion.span variants={letter}>l</motion.span>
                                <motion.span variants={letter}>a</motion.span>
                                <motion.span variants={letter}>p</motion.span>
                                <motion.span variants={letter}>t</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>p</motion.span>
                            </motion.span>
                        </div>
                    </motion.h1>
                </Text>
            )}
            </AnimatePresence>
        </Laptop>
    )
}

export default LaptopSequence;