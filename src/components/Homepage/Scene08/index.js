import { useState, useEffect, forwardRef } from "react"; 
import { Container } from "theme-ui";
import { FullScreen, VideoWrapper, Content, Renew, Shift, Transform, Row, Yoga, Fiit, Restore } from "./styles"; 

const Scene08 = forwardRef(({ active }, ref) => {

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
                <video ref={ref} src="/images/homepage/scene-08/bg.mp4" muted />
            </VideoWrapper>
            <Container variant="small">
                <Content>
                    <Renew>Renew</Renew>
                    <Shift>Shift</Shift>
                    <Transform>Transform</Transform>
                    <Row>
                        <Yoga>Yoga</Yoga>
                        <Fiit>Fiit</Fiit>
                        <Restore>Restore</Restore>
                    </Row>
                </Content>
            </Container>
        </FullScreen>
    )
});

export default Scene08;