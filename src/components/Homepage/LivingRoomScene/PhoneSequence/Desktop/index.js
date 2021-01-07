import { useRef, useState, useEffect } from "react";
import { Container } from "theme-ui";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

/* STYLES */
import { Phone, SeqWrapper, VideoLoopWrapper, TextContainer, Text, LeftText, RightText } from "./styles"; 

/* COMPONENTS */
import ImageSequence from "../../../ImageSequence"; 

// Image sequence images
import PhoneImages from "../images"; 

const PhoneSequenceDesktop = ({ width, height, nextStartPos, scrollY, progress, duration, x, y, sw, sh, offsetStyles, leftContent, rightContent, ...rest }) => {

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

        if(progress >= 0.7){ 

            // pause phone video
            setPhonePlaying(false);

            // current id
            const id = Math.round(((progress-0.7) * duration) * 0.25);

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

    // scroll out parallax 
    const transformY = useTransform(scrollY, [nextStartPos-(height-300), nextStartPos], [0, 200]);
    const scale = useTransform(scrollY, [nextStartPos-(height+300), nextStartPos], [1, 1.15])

    return(
        <Phone {...rest}>
            <SeqWrapper className={phonePlaying? "" : "front"}>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <VideoLoopWrapper className={phonePlaying? "front" : ""}>
                <motion.div>
                    <img src="/images/homepage/phone-seq/phone_seq_00239.png" style={offsetStyles} />
                    <video ref={phoneLoopRef} src="/images/homepage/phone-seq/phone_loop.mp4" style={offsetStyles} muted loop />
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