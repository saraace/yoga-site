import { useState, useEffect } from "react";
import { useTransform } from "framer-motion";
import ImageArray from "./images";
import ImageSequence from "../ImageSequence";
import { FullScreen } from "./styles"; 

const ShiftSequence = ({ scrollY, width, height, x, y, sw, sh, }) => {

    const imageSequence = ImageArray();

    const scale = useTransform(scrollY, [0, 300], ["1", "1.15"]);

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    useEffect(() => {

        const unsubscribeY = scrollY.onChange(() => {

            // within image sequence frames
            if(scrollY.current <= imageSequence.length) {
                setCanvasImage(scrollY.current); 
            }
            // image sequence is complete
            else {
                setCanvasImage(imageSequence.length);
            }

        });

        return () => {
            unsubscribeY();
        }
    }, [scrollY]);

    return(
        <FullScreen style={{ scale }}>
            <ImageSequence {...{ imageSequence, canvasImage, startPos: 0, width, height, x, y, sw, sh }} />
        </FullScreen>
    )
}

export default ShiftSequence;