import { useState, useEffect, useRef } from "react";
import { SeqWrapper } from "./styles";

const ImageSequence = ({ imageSequence, canvasImage, width, height, x, y, sw, sh, ...rest }) => {

    // canvas
    const canvasRef = useRef(null); 
    const [ context, setContext ] = useState(null); 

    // generate frame url based on index specified
    const getFrame = index => imageSequence[index];

    // set context from canvas
    useEffect(() => {
        if(canvasRef.current){
            setContext(canvasRef.current.getContext('2d'));
            //setCanvasImage(0);
        }
    }, [canvasRef]);

    // draw image on canvas
    useEffect(() => {
        
        if(context){
            // get current frame
            const image = getFrame(canvasImage);

            if(image !== undefined){
                if(image[0] !== undefined){
                    console.log('painting');
                    context.drawImage(image[0], x, y, sw, sh);
                }
            }
        }

    }, [canvasImage, context, x, y, sw, sh]); 

    return(
        <SeqWrapper {...rest}>
            <canvas ref={canvasRef} {...{ width, height }} />
        </SeqWrapper>
    )
}

export default ImageSequence;