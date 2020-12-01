import { forwardRef, useState, useEffect } from "react";
import Icon from "../../../assets/svgs/restore-icon.svg";
import { FullScreen, VideoWrapper, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";
import { useViewportScroll, useTransform } from "framer-motion";

const Scene11 = forwardRef(({ active, startPos }, ref) => {

    const { scrollY } = useViewportScroll();

    // intro content
    const introY = useTransform(scrollY, [startPos + 300, startPos + 1000], ['300px', '0px']); 
    const introOpacity = useTransform(scrollY, [startPos + 300, startPos + 1000], [0, 1]);

    // benefits content
    const benefitsY = useTransform(scrollY, [startPos + 1200, startPos + 1900], ["300px", "0px"]);
    const benefitsOpacity = useTransform(scrollY, [startPos + 1200, startPos + 1900], [0, 1]);

    // video background
    const [ play, setPlay ] = useState(false);

    useEffect(() => {
        if(ref){
            ref.current.addEventListener("loadeddata", () => {
                setPlay(true);
            });
        }
    }, [ref]);

   useEffect(() => {
        if(active && play){
            ref.current.play();
        } else if(!active){
            ref.current.pause();
        }
    }, [active, ref, play]);

    return(
        <FullScreen>
            <VideoWrapper>
                <video ref={ref} src="/images/homepage/scene-11-restore/bg-restore.mp4" muted loop/>
            </VideoWrapper>
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
})

Scene11.defaultProps = {
    active: false, 
    startPos: 0
}

export default Scene11;