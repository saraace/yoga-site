import { useState, useEffect, useRef } from "react"; 
import { Container } from "theme-ui";
import { useTransform, motion } from "framer-motion";
import { FullScreen, VideoWrapper, Content, Renew, Shift, Transform, Row, Yoga, Fiit, Restore } from "./styles"; 

const CategoriesScene = ({ active, scrollY, progress, startPos, height, offsetStyles }) => {

    const videoRef = useRef(null);

    const [ videoReady, setVideoReady ] = useState(false);
    
    const [ play, setPlay ] = useState(false);

    useEffect(() => {
        if(videoRef){
            videoRef.current.addEventListener("loadeddata", () => {
                setVideoReady(true);
            });
        }
    }, [videoRef]);

   useEffect(() => {
        if(progress > 0.1 && videoReady){
            setPlay(true)
        }
    }, [progress, videoReady]);

    useEffect(() => {
        if(play){
            videoRef.current.play();
        }
    }, [play, videoRef]);

    const scale = useTransform(scrollY, [startPos-height, startPos], [1.25, 1], [{ ease: "easeInOut" }]);
    const y = useTransform(scrollY, [startPos - height, startPos], [-300, 0]);

    return(
        <FullScreen>
            <motion.div style={{ scale, y }}>
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
            </motion.div>
        </FullScreen>
    )
}

export default CategoriesScene;