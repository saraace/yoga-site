import { useState, useEffect } from "react";
import { useTransform, useSpring, motion } from "framer-motion";
import ImageArray from "./images";
import ImageSequence from "../ImageSequence";
import { FullScreen } from "./styles"; 

const ShiftSequence = ({ scrollY, width, height, x, y, sw, sh, }) => {

    const imageSequence = ImageArray();

    const scale = useTransform(scrollY, [0, 1000], ["1", "1.15"], [{ease: "easeInOut"}]);

    const transformY = useTransform(scrollY, [400, height+600], ["0", "-200px"], [{ease: "easeInOut"}]);

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    useEffect(() => {

        const unsubscribeY = scrollY.onChange(() => {

            const frameId = Math.round(scrollY.current*0.35);

            // within image sequence frames
            if(frameId < imageSequence.length) {
                setCanvasImage(frameId); 
            }
            // image sequence is complete
            else {
                setCanvasImage(imageSequence.length-1);
            }

        });

        return () => {
            unsubscribeY();
        }
    }, [scrollY]);

    return(
        <FullScreen>
            <motion.div style={{ scale, y: transformY }}>
                <ImageSequence {...{ imageSequence, canvasImage, startPos: 0, width, height, x, y, sw, sh }} />
            </motion.div>
        </FullScreen>
    )
}

export default ShiftSequence;