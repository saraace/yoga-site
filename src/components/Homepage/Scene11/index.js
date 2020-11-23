import Icon from "../../../assets/svgs/restore-icon.svg";
import { FullScreen, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";

const Scene11 = () => {
    return(
        <FullScreen>
            <ContentContainer>
                <Intro>
                    <Icon />
                    <h2>Restore</h2>
                    <p>Inspired by ancient yoga and meditation practices, our restore classes combine traditional meditation techniques with restorative postures that encourage total relaxation for both mind and body.</p>
                </Intro>
                <Benefits>
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