import { useRef, useState, useEffect } from "react";
import Icon from "../../../assets/svgs/restore-icon.svg";
import { FullScreen, VideoWrapper, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";
import { useViewportScroll, useTransform } from "framer-motion";

const RestoreScene = ({ active, startPos, offsetStyles }) => {

    const videoRef = useRef(null);

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
        if(videoRef){
            videoRef.current.addEventListener("loadeddata", () => {
                setPlay(true);
            });
        }
    }, [videoRef]);

   useEffect(() => {
        if(active && play){
            videoRef.current.play();
        } else if(!active){
            videoRef.current.pause();
        }
    }, [active, videoRef, play]);

    return(
        <FullScreen>
            <VideoWrapper>
                <video ref={videoRef} src="/images/homepage/scene-11-restore/bg-restore.mp4" style={offsetStyles} muted loop/>
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
}

RestoreScene.defaultProps = {
    active: false, 
    startPos: 0
}

export default RestoreScene;