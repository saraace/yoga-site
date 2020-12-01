import { forwardRef, useState, useEffect } from "react";
import Icon from "../../../assets/svgs/yoga-icon.svg";
import { FullScreen, VideoWrapper, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";
import { useViewportScroll, useTransform } from "framer-motion";

const Scene09 = forwardRef(({ active, startPos }, ref) => {

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
                <video ref={ref} src="/images/homepage/scene-09-yoga/bg-yoga.mp4" muted loop/>
            </VideoWrapper>
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
})

Scene09.defaultProps = {
    active: false, 
    startPos: 0
}

export default Scene09;