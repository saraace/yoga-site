import Icon from "../../../assets/svgs/yoga-icon.svg";
import { FullScreen, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";
import { useViewportScroll, useTransform } from "framer-motion";

const Scene09 = () => {

    const { scrollY } = useViewportScroll();

    // intro content
    const introY = useTransform(scrollY, [2200, 2700], ['300px', '0px']); 
    const introOpacity = useTransform(scrollY, [2200, 2700], [0, 1]);

    // benefits content
    const benefitsY = useTransform(scrollY, [2800, 3500], ["300px", "0px"]);
    const benefitsOpacity = useTransform(scrollY, [2800, 3500], [0, 1]);

    return(
        <FullScreen>
            <ContentContainer>
                <Intro style={{ y: introY, opacity: introOpacity }}>
                    <Icon />
                    <h2>Yoga</h2>
                    <p>Brought to you by the creators of Hot Fusion Flow™, our total-body yoga classes provide room for creativity while remaining rooted in traditional techniques and postures.</p>
                </Intro>
                <Benefits style={{ y: benefitsY, opacity: benefitsOpacity }}>
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