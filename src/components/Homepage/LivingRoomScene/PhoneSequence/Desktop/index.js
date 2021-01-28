import { useRef, useState, useEffect } from "react";
import { Container } from "theme-ui";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

/* STYLES */
import { Phone, SeqWrapper, VideoLoopWrapper, TextContainer, Text, LeftText, RightText } from "./styles"; 

/* COMPONENTS */
import ImageSequence from "../../../ImageSequence"; 

// Image sequence images
import PhoneImages from "./images"; 

const PhoneSequenceDesktop = ({ width, height, nextStartPos, scrollY, progress, duration, x, y, sw, sh, offsetStyles, leftContent, rightContent, ...rest }) => {

    // phone video loop 
    const phoneLoopRef = useRef(null);

    // phone png frame 
    const phoneFrameRef = useRef(null);

    // phone loop state
    const [ phoneVideoReady, setPhoneVideoReady ] = useState(false);
    const [ phonePlaying, setPhonePlaying ] = useState(false);
    const [ phoneFrameLoaded, setPhoneFrameLoaded ] = useState(false);

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
                console.log('phone video loaded');
                setPhoneVideoReady(true);
            });

        }

        if(phoneFrameRef.current){

            // once ready set state
            phoneFrameRef.current.addEventListener("load", () => {
                console.log('phone tv frame loaded');
                setPhoneFrameLoaded(true);
            });

        }
    }, [phoneLoopRef, phoneFrameRef]); 

    useEffect(() => {

        // set motion value
        sceneProgress.set(progress);

        if(progress >= 0.7){ 

            // pause phone video
            setPhonePlaying(false);

            // current id
            const id = Math.round(((progress-0.7) * duration) * 0.25);

            if(id < imageSequence.length){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play phone video
                setPhonePlaying(true);
                setCanvasImage(imageSequence.length-1);
            }

        } 
        else{
            setPhonePlaying(false);
            setCanvasImage(0);
        }

    }, [progress]);

    useEffect(() => {
        if(phoneVideoReady && phoneFrameLoaded && phonePlaying){
            phoneLoopRef.current.play();
        } else{
            phoneLoopRef.current.pause();
        }
    }, [phoneVideoReady, phonePlaying, phoneFrameLoaded]); 

    // text animations
    const text = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0 }
    };
    // left
    const leftTextY = useTransform(sceneProgress, [0.74, 0.875], [0, height*-1]);
    const leftTextOpacity = useTransform(sceneProgress, [0.85, 0.862], [1, 0]);
    
    //right
    const rightTextY = useTransform(sceneProgress, [0.855, 1], [0, height*-1]);
    const rightTextOpacity = useTransform(sceneProgress, [0.97, 0.99], [1, 0]);

    return(
        <Phone {...rest}>
            <SeqWrapper className={(phoneVideoReady && phoneFrameLoaded && phonePlaying)? "" : "front"}>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <VideoLoopWrapper className={(phoneVideoReady && phoneFrameLoaded && phonePlaying)? "front" : ""}>
                <motion.div>
                    <img ref={phoneFrameRef} src="/images/homepage/phone-seq/desktop/phone_seq_00239.png" style={offsetStyles} />
                    <video ref={phoneLoopRef} src="/images/homepage/phone-seq/desktop/phone_loop.mp4" style={offsetStyles} muted loop />
                </motion.div>
            </VideoLoopWrapper>
            <TextContainer>
                <Container variant="large">
                    <Text>
                        <AnimatePresence>
                            {progress >= 0.74 && (
                                <LeftText initial="initial" animate="animate" exit="exit" style={{ y: leftTextY, opacity: leftTextOpacity }}>
                                    <motion.div variants={text}>
                                        { leftContent }
                                    </motion.div>
                                </LeftText>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {progress >= 0.825 && (
                                <RightText initial="initial" animate="animate" exit="exit" style={{ y: rightTextY, opacity: rightTextOpacity }}>
                                    <motion.div variants={text}>
                                        { rightContent }
                                    </motion.div>
                                </RightText>
                            )}
                        </AnimatePresence>
                    </Text>
                </Container>
            </TextContainer>
        </Phone>
    )
}

export default PhoneSequenceDesktop;