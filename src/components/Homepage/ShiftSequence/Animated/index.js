import { useState, useEffect } from "react";
import { useTransform, motion } from "framer-motion";
import ImageArray from "./images";
import ImageSequence from "../../ImageSequence";
import { FullScreen } from "./styles"; 

const AnimatedScene = ({ scrollY, yVal, width, height, x, y, sw, sh, }) => {

    const imageSequence = ImageArray();

    const scale = useTransform(scrollY, [0, 1000], ["1", "1.15"], [{ease: "easeInOut"}]);

    const transformY = useTransform(scrollY, [900, height+600], ["0", "-100px"], [{ease: "easeInOut"}]);

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    useEffect(() => {

        const frameId = Math.round(yVal*0.25);

        // within image sequence frames
        if(frameId < imageSequence.length) {
            setCanvasImage(frameId); 
        }
        // image sequence is complete
        else {
            setCanvasImage(imageSequence.length-1);
        }

    }, [yVal]);

    return(
        <FullScreen>
            <motion.div style={{ scale, y: transformY }}>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </motion.div>
        </FullScreen>
    )
}

export default AnimatedScene;