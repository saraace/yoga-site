import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { Scene, SceneContainer, Col, ImageCol, Video, PlayButton, Instructor, Bg } from "./styles";
import PlayIcon from "../../../assets/svgs/play-icon.svg";

const Instructors = ({ scrollY, progress, startPos, nextStartPos, duration, width, height }) => {

    /* const sceneProgress = useMotionValue(0);

    useEffect(() => {

        sceneProgress.set(progress);

    }, [progress]); */

    // background position
    const bgPos = width > height? { width: '100%', top: '50%'} : { height: '100%', left: '50%', x: '-50%'}

    // background effects
    const bgScale = useTransform(scrollY, [startPos, nextStartPos], [1, 1.2]);
    const bgY = useTransform(scrollY, [startPos-height, startPos, nextStartPos-height, nextStartPos], ['-30%', '-50%', '-50%', '-80%'])

    return(
        <Scene>
            <SceneContainer>
                <Col>
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