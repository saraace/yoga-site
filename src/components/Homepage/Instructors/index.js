import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { Scene, SceneContainer, Col, Video, PlayButton, Instructor, Bg } from "./styles";
import PlayIcon from "../../../assets/svgs/play-icon.svg";

const Instructors = ({ scrollY, progress, startPos, nextStartPos, duration, coverStyles }) => {

    const sceneProgress = useMotionValue(0);

    useEffect(() => {

        sceneProgress.set(progress);

    }, [progress]);

    // Background effects
    const bgScale = useTransform(scrollY, [startPos, startPos+duration, nextStartPos], [1.15, 1.1, 1.2]);
    const bgY = useTransform(scrollY, [startPos, startPos+duration, nextStartPos], [0, 80, -50])

    return(
        <Scene>
            <SceneContainer>
                <Col>
                    <h3>World-class Instructors</h3>
                    <h2>Introducing Paige Held</h2>
                    <p>Paige began practicing yoga at the age of 13 and became a certified yoga teacher in 2000. The founder of one of South Florida’s most celebrated yoga &amp; fitness studios, she is the co-creator of the SHIFT method.</p>
                </Col>
            </SceneContainer>
            <Video>
                <img src="/images/homepage/instructors/video.png" />
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
            <Instructor src="/images/homepage/instructors/paige.png" />
            <motion.div>
                <Bg style={{scale: bgScale, y: bgY, ...coverStyles}} src="/images/homepage/instructors/bg.png" />
            </motion.div>
        </Scene>
    )
}

export default Instructors;