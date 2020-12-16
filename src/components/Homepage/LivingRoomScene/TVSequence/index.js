/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect, useRef } from "react"; 
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link"; 

/* STYLES */
import { TV, Background, SeqWrapper, VideoLoopWrapper, Text, TextContainer, Col, ButtonRow, SlideOverTextContainer, SlideOverText } from "./styles"; 

/* COMPONENTS */
import ImageSequence from "../../ImageSequence";

// Image sequence images
import TVImages from "./images";

const TVSequence = ({ scrollY, progress, duration, x, y, sw, sh, width, height, offsetStyles, coverStyles, ...rest }) => {

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

    // ease
    //const introTransition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    /** INTRO TEXT **/
    const introText = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }
    // "We Are More Than Fitness" 
    /* const heading = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeIn"  } },
        exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn"  } }
    } */

    // intro paragraph
    /* const paragraph = {
        initial: { y: 75, opacity: 0 }, 
        animate: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.15, ease: "easeIn" } },
        exit: { opacity: 0, transition: { duration: 0.5, ...introTransition } }
    } */

    // watch & signup buttons
    /* const watchButton = {
        initial: { opacity: 0, y: 50 }, 
        animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.5, ...introTransition } }
    }
    const signUpButton = {
        initial: { opacity: 0, y: 50 }, 
        animate: { opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.5, ...introTransition } }
    } */

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
                    <img src="/images/homepage/tv-seq/tv_seq_00344.png" style={coverStyles} />
                    <video ref={tvLoopRef} src="/images/homepage/tv-seq/tv_loop.mp4" style={coverStyles} muted loop />
                </VideoLoopWrapper>
            </Background>
            <AnimatePresence>
            {progress > 0.005 && progress <= 0.1625 && (
                <Text initial="initial" animate="animate" exit="exit">
                    <TextContainer>
                        <Col style={{ y: scrollOut, opacity: opacityOut }}>
                            <motion.div variants={introText}>
                                <h1 >We Are More Than Fitness</h1>
                                <p>Experience our yoga, FIIT &amp; restore classes, in-studio or online.</p>
                                <ButtonRow>
                                    <button sx={{ variant: "buttons.secondary-outline" }}>Watch Video</button>
                                    <Link href="/sign-up">
                                        <a sx={{ variant: "buttons.primary" }}>Sign Up</a>
                                    </Link>
                                </ButtonRow> 
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
                                    <div>
                                        <h2>
                                            <div>Workout at </div>
                                            <div>Home</div>
                                        </h2>
                                        <h3>Yoga &amp; fitness where you want, when you want. </h3>
                                    </div>
                                    <div>
                                        <p>Forget about fighting traffic to get to the studio, or worrying about being late for your favorite class. Just download the SHIFT app and gain instant access to our suite of online, on-demand classes.</p>
                                    </div>
                                </motion.div>
                            </SlideOverText>
                        )}
                    </AnimatePresence>
                </SlideOverTextContainer>
            </motion.div>
        </TV>
    )
}

export default TVSequence;