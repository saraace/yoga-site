import { useRef, useState, useEffect } from "react";
import { Container } from "theme-ui";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

/* STYLES */
import { Laptop, SeqWrapper, VideoLoopWrapper, TextContainer, Text, LeftText, RightText } from "./styles"; 

/* COMPONENTS */
import ImageSequence from "../../ImageSequence"; 

// Image sequence images
import PhoneImages from "./images"; 

const PhoneSequence = ({ width, height, progress, duration, x, y, sw, sh, offsetStyles, ...rest }) => {

    // phone loop 
    const phoneLoopRef = useRef(null);

    // phone loop state
    const [ phoneVideoReady, setPhoneVideoReady ] = useState(false);
    const [ phonePlaying, setPhonePlaying ] = useState(false);

    // sequence images
    const imageSequence = PhoneImages();

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // framer motion value for scene progress
    const sceneProgress = useMotionValue(0);

    useEffect(() => {
        if(phoneLoopRef.current){

            // once ready set state
            phoneLoopRef.current.addEventListener("loadeddata", () => {
                setPhoneVideoReady(true);
            });

        }
    }, [phoneLoopRef]); 

    useEffect(() => {

        // set motion value
        sceneProgress.set(progress);

        if(progress >= 0.56){ 

            // pause phone video
            setPhonePlaying(false);

            // current id
            const id = Math.round(((progress-0.56) * duration) * 0.25);

            if(id <= 238){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play phone video
                setPhonePlaying(true);
                setCanvasImage(238);
            }

        } 
        else{
            setPhonePlaying(false);
            setCanvasImage(0);
        }

    }, [progress]);

    useEffect(() => {
        if(phoneVideoReady && phonePlaying){
            phoneLoopRef.current.play();
        } else{
            phoneLoopRef.current.pause();
        }
    }, [phoneVideoReady, phonePlaying]); 

    // ease
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    // text animations
    const text = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.5, ...transition } },
        exit: { y: 100, opacity: 0 }
    };
    // left
    const leftTextScroll = useTransform(sceneProgress, [0.61, 0.7], [0, height*-1]);
    
    //right
    const rightTextScroll = useTransform(sceneProgress, [0.71, 0.8], [0, height*-1]);

    return(
        <Laptop {...rest}>
            <SeqWrapper className={phonePlaying? "" : "front"}>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <VideoLoopWrapper className={phonePlaying? "front" : ""}>
                <img src="/images/homepage/phone-seq/phone-seq-00239.png" style={offsetStyles} />
                <video ref={phoneLoopRef} src="/images/homepage/phone-seq/phone-loop.mp4" style={offsetStyles} muted loop />
            </VideoLoopWrapper>
            <TextContainer>
                <Container variant="large">
                    <Text>
                        <AnimatePresence>
                            {progress >= 0.6 && (
                                <LeftText initial="initial" animate="animate" exit="exit" style={{ y: leftTextScroll }}>
                                    <motion.div variants={text}>
                                        <p>Live or on-demand.</p>
                                        <h2>Online classes featuring live instructor feedback.</h2>
                                    </motion.div>
                                </LeftText>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {progress >= 0.7 && (
                                <RightText initial="initial" animate="animate" exit="exit" style={{ y: rightTextScroll }}>
                                    <motion.div variants={text}>
                                        <h2>Your virtual fitness studio.</h2>
                                        <p>You can also book classes to go to your local YogaJoint studio and workout together.</p>
                                    </motion.div>
                                </RightText>
                            )}
                        </AnimatePresence>
                    </Text>
                </Container>
            </TextContainer>
        </Laptop>
    )
}

export default PhoneSequence;