import { useRef, useEffect } from "react"; 
import { Container } from "theme-ui";
import { FullScreen, VideoWrapper, Content, Renew, Shift, Transform, Row, Yoga, Fiit, Restore } from "./styles"; 

const Scene08 = () => {

    const videoRef = useRef();

    /* useEffect(() => {
        if(videoRef){
            videoRef.current.addEventListener("loadeddata", () => {
                videoRef.current.play();
            })
        }
    }, [videoRef]); */

    return(
        <FullScreen>
            {/* <VideoWrapper>
                <video ref={videoRef} src="/images/homepage/scene-08/bg.mp4"/>
            </VideoWrapper> */}
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
}

export default Scene08;