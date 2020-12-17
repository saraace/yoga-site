import { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { FullScreen, VideoWrapper, ContentContainer, Intro, Benefits, List, ListItem } from "./styles";

const SingleCategoryScene = ({ scrollY, yVal, progress, duration, startPos, nextStartPos, offsetStyles, height, posterSrc, videoSrc, icon, heading, description, listItems }) => {
    
    const sceneProgress = useMotionValue(0);

    useEffect(() => {
        sceneProgress.set(progress);
    }, [progress]);

    // intro content
    /* const introVar = {
        initial: { opacity: 0 }, 
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }, 
        exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" }  }
    } */
    const introY = useTransform(scrollY, [startPos, startPos+(duration/2)], [0, -400]); 

    // benefits content
    /* const benefitsVar = {
        initial: { opacity: 0 }, 
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" }  }, 
        exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" }  }
    } */
    const benefitsY = useTransform(scrollY, [startPos+(duration/2), startPos+duration], [0, -200]);
    const opacity = useTransform(scrollY, [startPos+duration, nextStartPos-(height/2)], [1, 0]);

    return(
        <FullScreen>
            <motion.div style={{ backgroundImage: `url(${posterSrc})`}}>
                <VideoWrapper>
                    {((yVal >= startPos-height) && (yVal <= nextStartPos)) && <video src={videoSrc} style={offsetStyles} autoPlay muted loop/>}
                </VideoWrapper>
                <ContentContainer>
                    <Intro>
                        <motion.div style={{ y: introY, opacity }}>
                            {icon}
                            <h2>{heading}</h2>
                            <p>{description}</p>
                        </motion.div>
                    </Intro>
                    <AnimatePresence>
                        {progress >= 0.5 && (
                            <Benefits initial="initial" animate="animate" exit="exit">
                                <motion.div style={{ y: benefitsY, opacity }}>
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