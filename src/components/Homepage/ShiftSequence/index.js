import { useEffect, useState, useRef } from "react";
import { FullScreen, SeqWrapper } from "./styles"; 
import { useViewportScroll, useTransform, motion } from "framer-motion";

const ShiftSequence = ({ progress, duration, width, height, x, y, sw, sh, }) => {

    const { scrollY } = useViewportScroll();
    const scale = useTransform(scrollY, [0, 300], ["1", "1.1"]);

    // canvas
    const canvasRef = useRef(null); 
    const [ context, setContext ] = useState(null); 

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // generate frame url based on index specified
    const getFrame = index => (`/images/homepage/shift-seq/shift_seq_${index.toString().padStart(5, "0")}.jpg`);

    // set context from canvas
    useEffect(() => {
        if(canvasRef.current){
            setContext(canvasRef.current.getContext('2d'));
        }
    }, [canvasRef]);

    useEffect(() => {
        
        // current id
        const id = Math.round(progress * duration);

        // within image sequence frames
        if(id <= 235) {
            setCanvasImage(id); 
        }
        // image sequence is complete
        else {
            setCanvasImage(235);
        }

    }, [progress, duration]);

    useEffect(() => {
        
        if(context){
            // image
            const img = document.createElement("img"); 

            // image listener - when loaded
            img.addEventListener("load", () => {
                context.drawImage(img, x, y, sw, sh);
            });

            // trigger load
            img.src = getFrame(canvasImage);
        }

    }, [canvasImage, context, x, y, sw, sh]); 

    return(
        <FullScreen>
            <SeqWrapper>
                <motion.canvas ref={canvasRef} {...{ width, height }} style={{ scale }} />
            </SeqWrapper>
        </FullScreen>
    )
}

export default ShiftSequence;