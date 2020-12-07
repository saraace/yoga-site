import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FullScreen, SeqWrapper } from "./styles";

const ImageSequence = ({ imageSequence, style, scrollY, width, height, x, y, sw, sh }) => {

    // canvas
    const canvasRef = useRef(null); 
    const [ context, setContext ] = useState(null); 

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // generate frame url based on index specified
    const getFrame = index => imageSequence[index];

    // set canvas image as user scrolls
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

    // set context from canvas
    useEffect(() => {
        if(canvasRef.current){
            setContext(canvasRef.current.getContext('2d'));
        }
    }, [canvasRef]);

    // draw image on canvas
    useEffect(() => {
        
        if(context){
            // get current frame
            const image = getFrame(canvasImage);

            if(image !== undefined){
                if(image[0] !== undefined){
                    context.drawImage(image[0], x, y, sw, sh);
                }
            }
        }

    }, [canvasImage, context, x, y, sw, sh]); 

    return(
        <FullScreen>
            <SeqWrapper>
                <motion.canvas ref={canvasRef} {...{ width, height, style }} />
            </SeqWrapper>
        </FullScreen>
    )
}

export default ImageSequence;