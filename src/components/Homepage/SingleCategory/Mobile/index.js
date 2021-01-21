import { useTransform } from "framer-motion";
import { FullScreen, Contain, ContentContainer, Intro, Heading, Benefits, List, ListItem } from "./styles";

const SingleCategorySceneMobile = ({ scrollY, duration, startPos, height, posterSrc, icon, heading, description, listItems }) => {

    // intro content
    const introY = useTransform(scrollY, [startPos, startPos+(duration*0.8)], [0, (height*2)*-1]);

    return(
        <FullScreen>
            <div style={{ backgroundImage: `url(${posterSrc})`}}>
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