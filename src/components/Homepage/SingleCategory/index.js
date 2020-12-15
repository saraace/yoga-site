import { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { FullScreen, VideoWrapper, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";

const SingleCategoryScene = ({ scrollY, progress, duration, startPos, nextStartPos, offsetStyles, height, videoSrc, icon, heading, description, listItems }) => {
    
    const sceneProgress = useMotionValue(0);

    useEffect(() => {
        sceneProgress.set(progress);
    }, [progress]);

    // intro content
    const introVar = {
        initial: { opacity: 0 }, 
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }, 
        exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" }  }
    }
    const introY = useTransform(scrollY, [startPos, nextStartPos], [0, height*-1]); 
    const introOpacity = useTransform(sceneProgress, [0.75, 1], [1, 0]);

    // benefits content
    const benefitsVar = {
        initial: { opacity: 0 }, 
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" }  }, 
        exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" }  }
    }
    const benefitsY = useTransform(scrollY, [startPos+(duration/2), nextStartPos], [0, height*-1]);
    const benefitsOpacity = useTransform(sceneProgress, [0.9, 1], [1, 0]);

    return(
        <FullScreen>
            <motion.div>
                <VideoWrapper>
                    {((scrollY.get() >= startPos-height) && (scrollY.get() <= nextStartPos)) && <video src={videoSrc} style={offsetStyles} autoPlay muted loop/>}
                </VideoWrapper>
                <ContentContainer>
                    <AnimatePresence>
                        {progress >= 0.05 && (
                            <Intro initial="initial" animate="animate" exit="exit" style={{ y: introY, opacity: introOpacity }}>
                                <motion.div variants={introVar}>
                                    {icon}
                                    <h2>{heading}</h2>
                                    <p>{description}</p>
                                </motion.div>
                            </Intro>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {progress >= 0.5 && (
                            <Benefits initial="initial" animate="animate" exit="exit" style={{ y: benefitsY, opacity: benefitsOpacity }}>
                                <motion.div variants={benefitsVar}>
                                    <List>
                                        {listItems.map((item, i) => (
                                            <ListItem key={i}>{item}</ListItem>
                                        ))}
                                    </List>
                                </motion.div>
                            </Benefits>
                        )}
                    </AnimatePresence>
                </ContentContainer>
            </motion.div>
        </FullScreen>
    )
}

SingleCategoryScene.defaultProps = {
    startPos: 0
}

export default SingleCategoryScene;