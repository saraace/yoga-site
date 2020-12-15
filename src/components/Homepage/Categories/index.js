import { useState, useEffect, useRef } from "react"; 
import { useTransform, AnimatePresence } from "framer-motion";
import { FullScreen, VideoWrapper, TextContainer, Content, Text, Renew, Shift, Transform, Row, Categories, Yoga, Fiit, Restore } from "./styles"; 

const CategoriesScene = ({ scrollY, progress, startPos, nextStartPos, height, offsetStyles }) => {

    const videoRef = useRef(null);

    const [ videoReady, setVideoReady ] = useState(false);
    
    const [ play, setPlay ] = useState(false);

    useEffect(() => {
        if(videoRef.current){
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

    // background effects
    const scale = useTransform(scrollY, [startPos-height, startPos, nextStartPos], [1.2, 1.1, 1], [{ ease: "easeInOut" }]);
    const y = useTransform(scrollY, [startPos-height, startPos, nextStartPos-height, nextStartPos], [-300, 0, 0, 100]);

    // text variants
    const headings = {
        animate: {
            transition: {
                staggerChildren: 0.3, 
                staggerDirection: 1
            }
        }
    }

    const word = {
        initial: { y: 50, opacity: 0 }, 
        animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }, 
        exit: { opacity: 0, transition: { delay: 0.9, duration: 0.5, ease: "easeOut" }}
    }

    const categories = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.9, duration: 0.5, ease: "easeOut" } },
        exit: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    }

    return(
        <FullScreen>
            <div>
                <VideoWrapper style={{ scale, y }}>
                {((scrollY.get() >= startPos) && (scrollY.get() <= nextStartPos)) && <video src="/images/homepage/scene-08/bg.mp4" style={offsetStyles} autoPlay muted />}
                </VideoWrapper>
                <AnimatePresence>
                    {progress > 0.15 && (
                        <TextContainer variant="small">
                            <Content initial="initial" animate="animate" exit="exit">
                                <Text>
                                    <Row  variants={headings}>
                                        <Renew variants={word}>Renew</Renew>
                                        <Shift variants={word}>Shift</Shift>
                                        <Transform variants={word}>Transform</Transform>
                                    </Row>
                                    <Categories variants={categories}>
                                        <Yoga>Yoga</Yoga>
                                        <Fiit>Fiit</Fiit>
                                        <Restore>Restore</Restore>
                                    </Categories>
                                </Text>
                            </Content>
                        </TextContainer>
                    )}
                </AnimatePresence>
            </div>
        </FullScreen>
    )
}

export default CategoriesScene;