import { useState, useEffect } from "react";
import { useTransform, motion } from "framer-motion";
import DesktopImageArray from "./images";
import MobileImageArray from "./mobile-images";
import ImageSequence from "../../ImageSequence";
import { FullScreen } from "./styles"; 

const AnimatedScene = ({ isMobile, scrollY, yVal, width, height, x, y, sw, sh, }) => {

    const desktopImageSequence = DesktopImageArray();

    const mobileImageSequence = MobileImageArray();

    const scale = useTransform(scrollY, [0, 1000], ["1", "1.15"], [{ease: "easeInOut"}]);

    const transformY = useTransform(scrollY, [900, height+600], ["0", "-100px"], [{ease: "easeInOut"}]);

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    useEffect(() => {

        const frameId = Math.round(yVal*0.25);

        // within image sequence frames
        if(frameId < desktopImageSequence.length) {
            setCanvasImage(frameId); 
        }
        // image sequence is complete
        else {
            setCanvasImage(desktopImageSequence.length-1);
        }

    }, [yVal]);

    return(
        <FullScreen className={isMobile ? 'mobile' : 'desktop'}>
            <motion.div style={{ scale, y: transformY }}>
                <ImageSequence {...{ imageSequence: (isMobile? mobileImageSequence : desktopImageSequence), canvasImage, width, height, x, y, sw, sh }} />
            </motion.div>
        </FullScreen>
    )
}

export default AnimatedScene;