import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

import { Scene, SceneContainer, Col, Video, PlayButton, Instructor, Bg } from "./styles";
import PlayIcon from "../../../assets/svgs/play-icon.svg";

const Instructors = ({ scrollY, progress }) => {

    const sceneProgress = useMotionValue(0);

    useEffect(() => {

        sceneProgress.set(progress);

    }, [progress]);

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
                <PlayButton>
                    <PlayIcon />
                </PlayButton>
            </Video>
            <Instructor src="/images/homepage/instructors/paige.png" />
            <Bg src="/images/homepage/instructors/bg.png" />
        </Scene>
    )
}

export default Instructors;