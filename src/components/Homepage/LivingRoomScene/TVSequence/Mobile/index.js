import { useState, useEffect, useRef } from "react"; 
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";

/* STYLES */
import { TV, Background, SeqWrapper, Text, TextContainer, Col, SlideOverTextContainer, SlideOverText } from "./styles"; 

/* COMPONENTS */
import ImageSequence from  "../../../ImageSequence";

// Image sequence images
import TVImages from "./images";

const TVSequenceMobile = ({ scrollY, progress, duration, x, y, sw, sh, width, height, offsetStyles, coverStyles, poseContent, tvContent, ...rest }) => {

    // tv still
    const [ tvStill, setTvStill ] = useState(false);

    // image sequence images
    const imageSequence = TVImages();

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // framer motion value for scene progress
    const sceneProgress = useMotionValue(0);

    // advances image sequence
    useEffect(() => {

        // set motion value
        sceneProgress.set(progress);

        if(progress > 0.1405){

            // current id
            const id = Math.round(((progress-0.1405) * duration) * 0.25);

            if(id < imageSequence.length){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                setCanvasImage(imageSequence.length - 1);
            }
        }
        else{
            setCanvasImage(0);
        }

    }, [progress, duration]);

    // background scale
    const scale = useTransform(scrollY, [height, height+600], ["1.15", "1"], [{ease: "easeInOut"}]);

    /** INTRO TEXT **/
    const introText = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }

    const scrollOut = useTransform(sceneProgress, [0, 0.1625], [0, (height)*-1]);
    const opacityOut = useTransform(sceneProgress, [0.12, 0.1625], [1, 0]);

    /** SLIDE OVER TEXT **/
    const slideOverContainer = useTransform(sceneProgress, [0.225, 0.4417], [0, (height*2)*-1]);

    return(
        <TV {...rest}>
            <Background>
                <SeqWrapper style={coverStyles}>
                    <motion.div style={{ scale }}>
                        <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
                    </motion.div>
                </SeqWrapper>
            </Background>
            <AnimatePresence>
            {progress > 0.005 && progress <= 0.1625 && (
                <Text initial="initial" animate="animate" exit="exit">
                    <TextContainer>
                        <Col style={{ y: scrollOut, opacity: opacityOut }}>
                            <motion.div variants={introText}>
                                { poseContent }
                            </motion.div>
                        </Col>
                    </TextContainer>
                </Text>
            )}
            </AnimatePresence>
            <motion.div initial="initial" animate="animate" exit="exit">
                <SlideOverTextContainer style={{ y: slideOverContainer }}>
                    <SlideOverText>
                        { tvContent }
                    </SlideOverText>
                </SlideOverTextContainer>
            </motion.div>
        </TV>
    )
}

export default TVSequenceMobile;