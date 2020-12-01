import { forwardRef, useState, useEffect } from "react";
import Icon from "../../../assets/svgs/fiit-icon.svg";
import { FullScreen, VideoWrapper, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";
import { useViewportScroll, useTransform } from "framer-motion";

const Scene10 = forwardRef(({ active, startPos }, ref) => {

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
                <video ref={ref} src="/images/homepage/scene-10-fiit/bg-fiit.mp4" muted loop/>
            </VideoWrapper>
            <ContentContainer>
                <Intro style={{ y: introY, opacity: introOpacity }}>
                    <Icon />
                    <h2>FIIT</h2>
                    <p>High-intensity cardio meets strength-training in FIIT, our high-octane series of classes designed to torch calories while instilling you with greater discipline, self-confidence, and coordination.</p>
                </Intro>
                <Benefits style={{ y: benefitsY, opacity: benefitsOpacity }}>
                    <List>
                        <ListItem>Test the limits of your endurance and see just how far you can push yourself in this high-intensity workout created to help you improve your focus for both inner and outer results.</ListItem>
                        <ListItem>Increase your endurance without straining your joints in this low to medium-impact, full body workout.</ListItem>
                    </List>
                </Benefits>
            </ContentContainer>
        </FullScreen>
    )
})

Scene10.defaultProps = {
    active: false, 
    startPos: 0
}

export default Scene10;