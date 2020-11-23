import Icon from "../../../assets/svgs/fiit-icon.svg";
import { FullScreen, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";

const Scene10 = () => {
    return(
        <FullScreen>
            <ContentContainer>
                <Intro>
                    <Icon />
                    <h2>FIIT</h2>
                    <p>High-intensity cardio meets strength-training in FIIT, our high-octane series of classes designed to torch calories while instilling you with greater discipline, self-confidence, and coordination.</p>
                </Intro>
                <Benefits>
                    <List>
                        <ListItem>Test the limits of your endurance and see just how far you can push yourself in this high-intensity workout created to help you improve your focus for both inner and outer results.</ListItem>
                        <ListItem>Increase your endurance without straining your joints in this low to medium-impact, full body workout.</ListItem>
                    </List>
                </Benefits>
            </ContentContainer>
        </FullScreen>
    )
}

export default Scene10;