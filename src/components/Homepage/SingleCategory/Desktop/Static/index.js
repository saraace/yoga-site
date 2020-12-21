
import { FullScreen, Contain, ContentContainer, Intro, BenefitsContainer, Benefits, List, ListItem } from "./styles";

const SingleCategoryScene = ({ posterSrc, icon, heading, description, listItems }) => {

    return(
        <FullScreen style={{ backgroundImage: `url(${posterSrc})`}}>
            <Contain>
                <ContentContainer>
                    <Intro>
                        {icon}
                        <h2>{heading}</h2>
                        <p>{description}</p>
                    </Intro>
                </ContentContainer>
                <BenefitsContainer>
                    <Benefits>
                        <List>
                        {listItems.map((item, i) => (
                            <ListItem key={i}>{item}</ListItem>
                        ))}
                        </List>
                    </Benefits>
                </BenefitsContainer>
            </Contain>
        </FullScreen>
    )
}

SingleCategoryScene.defaultProps = {
    startPos: 0
}

export default SingleCategoryScene;