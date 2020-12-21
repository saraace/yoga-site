import { useTransform } from "framer-motion";
import { FullScreen, VideoWrapper, Contain, ContentContainer, Intro, BenefitsContainer, Benefits, List, ListItem } from "./styles";

const SingleCategoryScene = ({ scrollY, yVal, duration, startPos, nextStartPos, offsetStyles, height, posterSrc, videoSrc, icon, heading, description, listItems }) => {

    // intro content
    const introY = useTransform(scrollY, [startPos, startPos+(duration*0.3), startPos+(duration*0.4), startPos+(duration*0.8)], [height*0.5, 0, 0, (height*0.5)*-1]); 
    const introOpacity = useTransform(scrollY, [startPos+(duration*0.4), startPos+(duration*0.8)], [1, 0])

    // benefits content
    const benefitsY = useTransform(scrollY, [startPos+(duration*0.25), startPos+(duration*0.5), startPos+(duration*0.6), startPos+duration], [height*0.5, 0, 0, (height*0.5)*-1]);
    const benefitsOpacity = useTransform(scrollY, [startPos+(duration*0.6), startPos+duration], [1, 0]);

    return(
        <FullScreen>
            <div style={{ backgroundImage: `url(${posterSrc})`}}>
                <VideoWrapper>
                    {((yVal >= startPos-height) && (yVal <= nextStartPos)) && <video src={videoSrc} style={offsetStyles} autoPlay muted loop/>}
                </VideoWrapper>
                <Contain>
                    <ContentContainer style={{ y: introY, opacity: introOpacity }}>
                        <Intro>
                            {icon}
                            <h2>{heading}</h2>
                            <p>{description}</p>
                        </Intro>
                    </ContentContainer>
                    <BenefitsContainer style={{ y: benefitsY, opacity: benefitsOpacity }}>
                        <Benefits>
                            <List>
                            {listItems.map((item, i) => (
                                <ListItem key={i}>{item}</ListItem>
                            ))}
                            </List>
                        </Benefits>
                    </BenefitsContainer>
                </Contain>
            </div>
        </FullScreen>
    )
}

SingleCategoryScene.defaultProps = {
    startPos: 0
}

export default SingleCategoryScene;