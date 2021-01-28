import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

/* STYLES */
import { Laptop, SeqWrapper, VideoLoopWrapper, Text } from "./styles"; 

/* COMPONENTS */
import ImageSequence from "../../../ImageSequence";

// Image sequence images
import LaptopImages from "./images";

const LaptopSequenceDesktop = ({ width, height, progress, duration, x, y, sw, sh, offsetStyles, content, ...rest }) => {

    // laptop video loop 
    const laptopLoopRef = useRef(null);

    // laptop png frame
    const laptopFrameRef = useRef(null);

    // laptop loop state
    const [ laptopVideoReady, setLaptopVideoReady ] = useState(false);
    const [ laptopPlaying, setLaptopPlaying ] = useState(false);
    const [ laptopFrameLoaded, setLaptopFrameLoaded ] = useState(false);

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

        if(laptopFrameRef.current){

            // once ready set state
            laptopFrameRef.current.addEventListener("load", () => {
                setLaptopFrameLoaded(true);
            });

        }
    }, [laptopLoopRef, laptopFrameRef]); 

    useEffect(() => {

        // set motion value
        sceneProgress.set(progress);

        if(progress >= 0.45){ 

            // pause laptop video
            setLaptopPlaying(false);

            // current id
            const id = Math.round(((progress-0.45) * duration) * 0.25);

            if(id < imageSequence.length){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play laptop video
                setLaptopPlaying(true);
                setCanvasImage(imageSequence.length-1);
            }

        } 
        else{
            setLaptopPlaying(false);
            setCanvasImage(0);
        }

    }, [progress]);

    useEffect(() => {
        if(laptopVideoReady && laptopFrameLoaded && laptopPlaying){
            laptopLoopRef.current.play();
        } else{
            laptopLoopRef.current.pause();
        }
    }, [laptopVideoReady, laptopPlaying, laptopFrameLoaded]); 
    
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
            <SeqWrapper className={(laptopVideoReady && laptopFrameLoaded && laptopPlaying)? "" : "front"}>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <VideoLoopWrapper className={(laptopVideoReady && laptopFrameLoaded && laptopPlaying)? "front" : ""}>
                <img  ref={laptopFrameRef} src="/images/homepage/laptop-seq/desktop/laptop_seq_00239.png" style={offsetStyles} />
                <video ref={laptopLoopRef} src="/images/homepage/laptop-seq/desktop/laptop_loop.mp4" style={offsetStyles} muted loop />
            </VideoLoopWrapper>
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

export default LaptopSequenceDesktop;