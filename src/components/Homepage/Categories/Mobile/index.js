import { useState, useEffect, useRef } from "react"; 
import { useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { FullScreen, VideoWrapper, SeqWrapper, Gradient, TextContainer, Content, Text, Renew, Shift, Transform, Row, Categories, Yoga, Fiit, Restore } from "./styles"; 

/* COMPONENTS */ 
import ImageSequence from "../../ImageSequence";

// Image sequence images 
import YogaImages from "./images";

const CategoriesScene = ({ duration, scrollY, yVal, progress, startPos, nextStartPos, width, height, x, y, sw, sh, offsetStyles }) => {

    const videoRef = useRef(null);

    // image sequence images 
    const imageSequence = YogaImages(); 

    // last drawn image
    const [ canvasImage, setCanvasImage ] = useState(0);

    // framer motion value for sequence progress
    const sceneProgress = useMotionValue(0);

    useEffect(() => {
        if(videoRef.current){
            videoRef.current.addEventListener("loadeddata", () => {
                videoRef.current.play();
            });
        }
    }, [videoRef]);

    // advances image sequence
    useEffect(() => {
        sceneProgress.set(progress);

        if(progress > 0.01){
            
            const id = Math.round(((progress-0.01) * duration) * 0.1); 

            if(id < imageSequence.length){
                setCanvasImage(id);
            }

            else{
                setCanvasImage(imageSequence.length - 1);
            }
        }

    }, [progress, duration]);

    // text variants
    const headings = {
        animate: {
            transition: {
                staggerChildren: 0.3, 
                staggerDirection: 1
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.3,
                staggerDirection: -1
            }
        }
    }

    const word = {
        initial: { y: 50, opacity: 0 }, 
        animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }, 
        exit: { y: 50, opacity: 0, transition: { duration: 0.5, ease: "easeOut" }}
    }

    const categories = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.9, duration: 0.5, ease: "easeOut" } },
        exit: { y: 50, opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }

    // gradient transform
    const opacity = useTransform(sceneProgress, [0.23, 0.31], [0, 1]);

    return(
        <FullScreen>
            <div>
                {progress >= 0.01 && 
                <>
                    <SeqWrapper>
                        <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
                    </SeqWrapper>
                    <Gradient style={{ opacity }} />
                </>
                }
                <AnimatePresence>
                    {progress > 0.05 && progress < 0.31 && (
                        <TextContainer variant="small">
                            <Content initial="initial" animate="animate" exit="exit">
                                <Text>
                                    <Row variants={headings}>
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