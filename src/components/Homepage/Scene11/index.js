import Icon from "../../../assets/svgs/restore-icon.svg";
import { FullScreen, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";
import { useViewportScroll, useTransform } from "framer-motion";

const Scene11 = ({ startPos }) => {

    const { scrollY } = useViewportScroll();

    // intro content
    const introY = useTransform(scrollY, [startPos + 300, startPos + 1000], ['300px', '0px']); 
    const introOpacity = useTransform(scrollY, [startPos + 300, startPos + 1000], [0, 1]);

    // benefits content
    const benefitsY = useTransform(scrollY, [startPos + 1200, startPos + 1900], ["300px", "0px"]);
    const benefitsOpacity = useTransform(scrollY, [startPos + 1200, startPos + 1900], [0, 1]);

    return(
        <FullScreen>
            <ContentContainer>
                <Intro style={{ y: introY, opacity: introOpacity }}>
                    <Icon />
                    <h2>Restore</h2>
                    <p>Inspired by ancient yoga and meditation practices, our restore classes combine traditional meditation techniques with restorative postures that encourage total relaxation for both mind and body.</p>
                </Intro>
                <Benefits style={{ y: benefitsY, opacity: benefitsOpacity }}>
                    <List>
                        <ListItem>A moving meditation designed to facilitate physical recovery and create longer, leaner musculature, our restore class will help melt away tension, improve flexibility, and calm your mind.</ListItem>
                        <ListItem>Allow your body to revive itself with this gentle approach to a guided, seated meditation routine.</ListItem>
                    </List>
                </Benefits>
            </ContentContainer>
        </FullScreen>
    )
}

export default Scene11;