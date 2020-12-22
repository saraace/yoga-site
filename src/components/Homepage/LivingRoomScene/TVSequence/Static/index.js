
import { Pose, TextContainer, Col, TV, SlideOverTextContainer, SlideOverText } from "./styles";

const TVSequenceStatic = ({ poseContent, tvContent }) => {
    return(
        <>
            <Pose>
                <TextContainer>
                    <Col>
                        { poseContent }
                    </Col>
                </TextContainer>
            </Pose>
            <TV>
                <SlideOverTextContainer>
                    <SlideOverText>
                        { tvContent }
                    </SlideOverText>
                </SlideOverTextContainer>
            </TV>
        </>
    )
}

export default TVSequenceStatic;