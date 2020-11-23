import Icon from "../../../assets/svgs/yoga-icon.svg";
import { FullScreen, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";

const Scene09 = () => {
    return(
        <FullScreen>
            <ContentContainer>
                <Intro>
                    <Icon />
                    <h2>Yoga</h2>
                    <p>Brought to you by the creators of Hot Fusion Flow™, our total-body yoga classes provide room for creativity while remaining rooted in traditional techniques and postures.</p>
                </Intro>
                <Benefits>
                    <List>
                        <ListItem>A strong musical component provides an organic catalyst for transitions while encouraging you to place a greater focus on your breathing and posture.</ListItem>
                        <ListItem>Flow and follow along to a vinyasa-based practice that will help to open up your body, your mind, and your spirit.</ListItem>
                    </List>
                </Benefits>
            </ContentContainer>
        </FullScreen>
    )
}

export default Scene09;