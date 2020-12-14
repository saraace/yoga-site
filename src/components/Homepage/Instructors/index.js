import { useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

import { Scene, SceneContainer, Col, ImageCol, Video, PlayButton, Instructor, Bg } from "./styles";
import PlayIcon from "../../../assets/svgs/play-icon.svg";

const Instructors = ({ scrollY, progress, startPos, nextStartPos, width, height }) => {
    
    const sceneProgress = useMotionValue(0);

    useEffect(() => {
        sceneProgress.set(progress);
    }, [progress]);

    // ease
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    // background position
    const bgPos = width > height? { width: '100%', bottom: '0'} : { height: '100%', left: '50%', x: '-50%'}

    // background effects
    const bgScale = useTransform(scrollY, [startPos, nextStartPos], [1, 1.2]);
    const bgY = useTransform(scrollY, [startPos-height, startPos, nextStartPos-height, nextStartPos], ['-25%', '0%', '0%', '25%'])

    // text animations 
    const textAnimateIn = {
        initial: { opacity: 0, y: 100 }, 
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ...transition } },
        exit: { opacity: 0, transition: { duration: 0.5, ...transition } }
    }
    
    const textScroll = useTransform(sceneProgress, [0.1, 0.9], [0, height*-1]);
    const textOpacity = useTransform(sceneProgress, [0.5, 0.9], [1, 0])

    return(
        <Scene>
            <SceneContainer>
                <Col>
                    <AnimatePresence>
                        {progress >= 0.05 && progress < 0.95 && (
                            <motion.div initial="initial" animate="animate" exit="exit" style={{ y: textScroll, opacity: textOpacity }}>
                                <motion.div variants={textAnimateIn}>
                                    <h3>World-class Instructors</h3>
                                    <h2>Introducing Paige Held</h2>
                                    <Video>
                                        <img src="/images/homepage/instructors/video.jpg" />
                                        <PlayButton
                                            initial={{ scale: 1, y: '-50%' }}
                                            animate={{ scale: 1.15, y: '-50%' }}
                                            transition={{
                                                scale: {
                                                    duration: 0.9,
                                                    yoyo: Infinity, 
                                                    repeatDelay: 0, 
                                                    ease: "easeOut"
                                                }
                                            }}
                                        >
                                            <PlayIcon />
                                        </PlayButton>
                                    </Video>
                                    <p>Paige began practicing yoga at the age of 13 and became a certified yoga teacher in 2000. The founder of one of South Florida’s most celebrated yoga &amp; fitness studios, she is the co-creator of the SHIFT method.</p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Col>
                <ImageCol>
                    <Instructor src="/images/homepage/instructors/instructor.png" />
                </ImageCol>
            </SceneContainer>
            <motion.div>
                <Bg style={{ scale: bgScale, y: bgY, ...bgPos }} src="/images/homepage/instructors/bg.png" />
            </motion.div>
        </Scene>
    )
}

export default Instructors;