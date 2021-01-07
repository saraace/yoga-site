import { useTransform } from "framer-motion";
import { FullScreen, VideoWrapper, Contain, ContentContainer, Intro, Heading, BenefitsContainer, Benefits, List, ListItem } from "./styles";

const SingleCategorySceneMobile = ({ scrollY, yVal, duration, startPos, nextStartPos, offsetStyles, height, posterSrc, videoSrc, icon, heading, description, listItems }) => {

    // intro content
    const introY = useTransform(scrollY, [startPos, startPos+(duration*0.8)], [0, (height*2)*-1]); 
    
    return(
        <FullScreen>
            <div style={{ backgroundImage: `url(${posterSrc})`}}>
                <VideoWrapper>
                    {((yVal >= startPos-height) && (yVal <= nextStartPos)) && <video src={videoSrc} style={offsetStyles} autoPlay muted loop/>}
                </VideoWrapper>
                <Contain>
                    <ContentContainer style={{ y: introY }}>
                        <Intro>
                            <Heading>
                                {icon}
                                <h2>{heading}</h2>
                            </Heading>
                            <p>{description}</p>
                        </Intro>
                        <Benefits>
                            <List>
                            {listItems.map((item, i) => (
                                <ListItem key={i}>{item}</ListItem>
                            ))}
                            </List>
                        </Benefits>
                    </ContentContainer>
                </Contain>
            </div>
        </FullScreen>
    )
}

SingleCategorySceneMobile.defaultProps = {
    startPos: 0
}

export default SingleCategorySceneMobile;