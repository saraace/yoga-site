import { useState, useEffect, useRef } from "react"; 
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";

/* STYLES */
import { TV, Background, SeqWrapper, VideoLoopWrapper, Text, TextContainer, Col, SlideOverTextContainer, SlideOverText } from "./styles"; 

/* COMPONENTS */
import ImageSequence from  "../../../ImageSequence";

// Image sequence images
import TVImages from "./images";

const TVSequenceDesktop = ({ scrollY, progress, duration, x, y, sw, sh, width, height, offsetStyles, coverStyles, poseContent, tvContent, ...rest }) => {

    // tv loop 
    const tvLoopRef = useRef(null);

    // tv loop state
    const [ tvVideoReady, setTvVideoReady ] = useState(false);
    const [ tvPlaying, setTvPlaying ] = useState(false);

    // image sequence images
    const imageSequence = TVImages();

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // framer motion value for scene progress
    const sceneProgress = useMotionValue(0);

    // sets video status once it is loaded
    useEffect(() => {
        if(tvLoopRef.current){

            // once ready set state
            tvLoopRef.current.addEventListener("loadeddata", () => {
                console.log('the video is loaded');
                setTvVideoReady(true);
            });

        }
    }, [tvLoopRef]); 

    // plays video once triggered at the end of image seqence
    useEffect(() => {
        if(tvVideoReady && tvPlaying){
            tvLoopRef.current.play();
        } else{
            tvLoopRef.current.pause();
        }
    }, [tvVideoReady, tvPlaying]);

    // advances image sequence
    useEffect(() => {

        // set motion value
        sceneProgress.set(progress);

        if(progress > 0.1405){
            
            // pause tv video
            setTvPlaying(false);

            // current id
            const id = Math.round(((progress-0.1405) * duration) * 0.25);

            if(id < imageSequence.length){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play tv video
                setTvPlaying(true);
                setCanvasImage(imageSequence.length - 1);
            }
        }
        else{
            setTvPlaying(false);
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
    const slideOverBackground = useTransform(sceneProgress, [0.225, 0.2625, 0.4042, 0.4417], [0, -268, -268, 0]);
    const slideOverContainer = useTransform(sceneProgress, [0.225, 0.2625, 0.4042, 0.4417], [537, 0, 0, 537]);
    const slideOverText = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition : { duration: 0.5, ease: "easeOut"}},
        exit: { opacity: 0, transition: { duration: 0.7, ease: "easeOut" } }
    }
    const slideOverTextOut = useTransform(sceneProgress, [0.24, 0.425], [0, height*-1]);
    const slideOverTextOp = useTransform(sceneProgress, [0.4, 0.425], [1, 0]);

    return(
        <TV {...rest}>
            <Background 
                style={{ x: slideOverBackground }}
            >
                <SeqWrapper className={tvPlaying? "" : "front"} style={coverStyles}>
                    <motion.div style={{ scale }}>
                        <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
                    </motion.div>
                </SeqWrapper>
                <VideoLoopWrapper className={tvPlaying? "front" : ""} style={offsetStyles}>
                    <img src="/images/homepage/tv-seq/desktop/tv_seq_00241.png" style={coverStyles} />
                    <video ref={tvLoopRef} src="/images/homepage/tv-seq/desktop/tv_loop.mp4" style={coverStyles} muted loop />
                </VideoLoopWrapper>
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
                <SlideOverTextContainer style={{ x: slideOverContainer }}>
                    <AnimatePresence>
                        {progress >= 0.25 && (
                            <SlideOverText 
                            inital="initial" 
                            animate="animate" 
                            exit="exit" 
                            style={{ y: slideOverTextOut, opacity: slideOverTextOp }}>
                                <motion.div variants={slideOverText} >
                                    { tvContent }
                                </motion.div>
                            </SlideOverText>
                        )}
                    </AnimatePresence>
                </SlideOverTextContainer>
            </motion.div>
        </TV>
    )
}

export default TVSequenceDesktop;