import { Scene, SceneContainer, Col, ImageCol, Video, PlayButton, Instructor } from "./styles";
import PlayIcon from "../../../../assets/svgs/play-icon.svg";

const StaticScene = ({ isMobile, heading, content }) => {
    return(
        <Scene>
            <SceneContainer>
                <Col>
                    <div>
                        { heading }
                        <Video>
                        {!isMobile && <img src="/images/homepage/instructors/video.jpg" />}
                        {isMobile && <img src="/images/homepage/instructors/mobile-video.jpg" />}
                            <PlayButton>
                                <PlayIcon />
                            </PlayButton>
                        </Video>
                        { content }
                    </div>
                </Col>
                <ImageCol>
                    <Instructor src="/images/homepage/instructors/instructor.png" />
                </ImageCol>
            </SceneContainer>
        </Scene>
    )
}

export default StaticScene;