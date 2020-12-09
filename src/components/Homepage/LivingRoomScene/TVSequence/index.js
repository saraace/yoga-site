/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect, useRef } from "react"; 
import { motion, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link"; 

/* STYLES */
import { TV, Background, SeqWrapper, VideoLoopWrapper, Text, TextContainer, Col, ButtonRow, SlideOverTextContainer } from "./styles"; 

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

        if(progress > 0.05){
            
            // pause tv video
            setTvPlaying(false);

            // current id
            const id = Math.round(((progress-0.05) * duration) * 0.25);

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
    const introTransition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
    const slidingTransition = { duration: 0.9, ease: "easeInOut" };

    /** INTRO TEXT **/

    // "We Are More" line
    const headingLine1 = {
        animate: { transition: { delayChildren: 0, staggerChildren: 0.04, staggerDirection: 1 } },
        exit: { transition: { delayChildren: 0, staggerChildren: 0.04, staggerDirection: -1 } }
    };

    // "Than Fitness" line
    const headingLine2 = {
        animate: { transition: { delayChildren: 0.25, staggerChildren: 0.04, staggerDirection: 1 } },
        exit: { transition: { delayChildren: 0.25, staggerChildren: 0.04, staggerDirection: -1 } }
    };

    // heading letters
    const letter = {
        initial: { y: 100 },
        animate: { y: 0, transition: { duration: 0.5, ...introTransition } },
        exit: { y: 100, transition: { duration: 0.5, ...introTransition } } 
    };

    // intro paragraph
    const paragraph = {
        initial: { opacity: 0 }, 
        animate: { opacity: 1, transition: { duration: 0.3, delay: 1, ...introTransition } },
        exit: { opacity: 0, transition: { duration: 0.3, delay: 1, ...introTransition }  }
    }

    // watch & signup buttons
    const watchButton = {
        initial: { opacity: 0, y: 50 }, 
        animate: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.3 } },
        exit: { opacity: 0, y: 50, transition: { delay: 1, duration: 0.3 } 
    }
    }
    const signUpButton = {
        initial: { opacity: 0, y: 50 }, 
        animate: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.3 } },
        exit: { opacity: 0, y: 50, transition: { delay: 1.2, duration: 0.3 } }
    }

    /** SLIDE OVER TEXT **/
    const slideOverContainer = {
        initial: { right: '-537px' }, 
        animate: { right: '0px', transition: { ...slidingTransition } },
        exit: { right: '-537px', transition: { ...slidingTransition } }
    }
    const slideOverText = {
        initial: { y: 200, opacity: 0 },
        animate: { y: 0, opacity: 1, transition : { delay: 0.5, duration: 0.7, ...introTransition }},
        exit: { y: -200, opacity: 0, transition: { duration: 0.7, ...introTransition } }
    }

    return(
        <TV {...rest}>
            <Background 
                animate={progress >= 0.25 && progress <= 0.45  ? { left: -537, right: 537} : { left: 0, right: 0}} 
                transition={slidingTransition}
            >
                <SeqWrapper className={tvPlaying? "" : "front"} style={coverStyles}>
                    <motion.div style={{ scale }}>
                        <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
                    </motion.div>
                </SeqWrapper>
                <VideoLoopWrapper className={tvPlaying? "front" : ""} style={offsetStyles}>
                    <img src="/images/homepage/tv-seq/tv_seq_00344.png" style={coverStyles} />
                    <video ref={tvLoopRef} src="/images/homepage/tv-seq/tv-loop.mp4" style={coverStyles} muted loop 
                    />
                </VideoLoopWrapper>
            </Background>
            <AnimatePresence>
            {progress > 0 && progress <= 0.1 && (
                <Text initial="initial" animate="animate" exit="exit">
                    <TextContainer>
                        <Col>
                            {/* <h1>We Are More Than Fitness</h1> */}
                            <h1>
                                <motion.div style={{ overflow: 'hidden' }}>
                                    <motion.span variants={headingLine1} >
                                        <motion.span variants={letter} >W</motion.span>
                                        <motion.span variants={letter} >e</motion.span>
                                        <motion.span variants={letter} >&nbsp;</motion.span>
                                        <motion.span variants={letter} >A</motion.span>
                                        <motion.span variants={letter} >r</motion.span>
                                        <motion.span variants={letter} >e</motion.span>
                                        <motion.span variants={letter} >&nbsp;</motion.span>
                                        <motion.span variants={letter} >M</motion.span>
                                        <motion.span variants={letter} >o</motion.span>
                                        <motion.span variants={letter} >r</motion.span>
                                        <motion.span variants={letter} >e</motion.span>
                                    </motion.span>
                                </motion.div>
                                <motion.div style={{ overflow: 'hidden'}}>
                                    <motion.span variants={headingLine2}>
                                        <motion.span variants={letter}>T</motion.span>
                                        <motion.span variants={letter}>h</motion.span>
                                        <motion.span variants={letter}>a</motion.span>
                                        <motion.span variants={letter}>n</motion.span>
                                        <motion.span variants={letter}>&nbsp;</motion.span>                                         
                                        <motion.span variants={letter}>F</motion.span>
                                        <motion.span variants={letter}>i</motion.span>
                                        <motion.span variants={letter}>t</motion.span>
                                        <motion.span variants={letter}>n</motion.span>
                                        <motion.span variants={letter}>e</motion.span>
                                        <motion.span variants={letter}>s</motion.span>
                                        <motion.span variants={letter}>s</motion.span>
                                    </motion.span>
                                </motion.div>
                            </h1>
                            <motion.p variants={paragraph}>Experience our yoga, FIIT &amp; restore classes, in-studio or online.</motion.p>
                            <ButtonRow>
                                <motion.button variants={watchButton} sx={{ variant: "buttons.secondary-outline" }}>Watch Video</motion.button>
                                <Link href="/sign-up">
                                    <motion.a variants={signUpButton} sx={{ variant: "buttons.primary" }}>Sign Up</motion.a>
                                </Link>
                            </ButtonRow> 
                        </Col>
                    </TextContainer>
                </Text>
            )}
            </AnimatePresence>
            <AnimatePresence>
                {progress >= 0.25 && progress <= 0.45 && (
                    <motion.div initial="initial" animate="animate" exit="exit">
                        <SlideOverTextContainer variants={slideOverContainer}>
                            <motion.div variants={slideOverText}>
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
                        </SlideOverTextContainer>
                    </motion.div>
                )}
            </AnimatePresence>
        </TV>
    )
}

export default TVSequence;