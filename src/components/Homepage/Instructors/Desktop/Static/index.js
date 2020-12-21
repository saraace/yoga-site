import { Scene, SceneContainer, Col, ImageCol, Video, PlayButton, Instructor } from "./styles";
import PlayIcon from "../../../../../assets/svgs/play-icon.svg";

const Static = () => {
    return(
        <Scene>
            <SceneContainer>
                <Col>
                    <div>
                        <h3>World-class Instructors</h3>
                        <h2>Introducing Paige Held</h2>
                        <Video>
                            <img src="/images/homepage/instructors/video.jpg" />
                            <PlayButton>
                                <PlayIcon />
                            </PlayButton>
                        </Video>
                        <p>Paige began practicing yoga at the age of 13 and became a certified yoga teacher in 2000. The founder of one of South Florida’s most celebrated yoga &amp; fitness studios, she is the co-creator of the SHIFT method.</p>
                    </div>
                </Col>
                <ImageCol>
                    <Instructor src="/images/homepage/instructors/instructor.png" />
                </ImageCol>
            </SceneContainer>
        </Scene>
    )
}

export default Static;