import { useState, useEffect, useRef } from "react"; 
import { Container } from "theme-ui";
import { FullScreen, VideoWrapper, Content, Renew, Shift, Transform, Row, Yoga, Fiit, Restore } from "./styles"; 

const CategoriesScene = ({ active, offsetStyles }) => {

    const videoRef = useRef(null);

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
                <video ref={videoRef} src="/images/homepage/scene-08/bg.mp4" style={offsetStyles} muted />
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
}

export default CategoriesScene;