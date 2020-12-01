import { useRef, useEffect } from "react";
import { FullScreen } from "./styles";

const Scene03 = ({ progress, width, height, duration }) => {

    // canvas
    const canvasRef = useRef(null); 

    // generate frame url based on index specified
    const getFrame = index => (`/images/homepage/scene-03/shift_websiteAnim_v06_${index.toString().padStart(5, "0")}.jpg`);
    
    useEffect(() => {

        // current id
        const id = Math.round(progress * duration);

         if(id <= 120){
            // refs
            const canvas = canvasRef.current; 
            const context = canvas.getContext('2d');

            // get the scale
            const scale = Math.max(canvas.width / 1920, canvas.height / 1080);

            // get the top left position of the image
            const x = (canvas.width) - (1920) * scale;
            const y = (canvas.height) - (1080) * scale;

            // image
            const img = document.createElement("img");

            // image listener - when loaded
            img.addEventListener("load", () => {
                context.drawImage(img, x, y, 1920 * scale, 1080 * scale);
            });

            // trigger load
            img.src = getFrame(id);
        } 

    }, [progress])

    return(
        <FullScreen>
            <canvas ref={canvasRef} {...{ width, height }} />
        </FullScreen>
    )
}

export default Scene03;