import { useRef, useState, useEffect } from "react";
import { Laptop, SeqWrapper, VideoLoopWrapper} from "./styles"; 

const LaptopSequence = ({ width, height, progress, duration, x, y, sw, sh, ...rest }) => {

    // laptop loop 
    const laptopLoopRef = useRef(null);

    // laptop loop state
    const [ laptopVideoReady, setLaptopVideoReady ] = useState(false);
    const [ laptopPlaying, setLaptopPlaying ] = useState(false);
    
    // canvas
    const canvasRef = useRef(null);
    const [ context, setContext ] = useState(null);

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // generate frame url based on index specified
    const getFrame = index => (`/images/homepage/laptop-seq/shift_websiteAnim_v05_${index.toString().padStart(5, "0")}.jpg`);

    useEffect(() => {
        if(laptopLoopRef.current){

            // once ready set state
            laptopLoopRef.current.addEventListener("loadeddata", () => {
                setLaptopVideoReady(true);
            });

        }
    }, [laptopLoopRef]); 

    useEffect(() => {
        if(canvasRef.current){ 
            setContext(canvasRef.current.getContext('2d'));
        }
    }, [canvasRef]);

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

    useEffect(() => {

        if(progress >= 0.5){ 

            // pause laptop video
            setLaptopPlaying(false);

            // current id
            const id = Math.round((progress-0.5) * duration);

            if(id <= 59){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play laptop video
                setLaptopPlaying(true);
                setCanvasImage(59);
            }

        } 
        else{
            setLaptopPlaying(false);
            setCanvasImage(0);
        }

    }, [progress]);

    useEffect(() => {
        if(laptopVideoReady && laptopPlaying){
            laptopLoopRef.current.play();
        } else{
            laptopLoopRef.current.pause();
        }
    }, [laptopVideoReady, laptopPlaying])

    return(
        <Laptop {...rest}>
            <SeqWrapper className={laptopPlaying? "" : "front"}>
                <canvas ref={canvasRef} {...{ width, height }} />
            </SeqWrapper>
            <VideoLoopWrapper className={laptopPlaying? "front" : ""}>
                <img src="/images/homepage/laptop-seq/shift_websiteAnim_v05_00060.png" style={{ height, left: x }} />
                <video ref={laptopLoopRef} src="/images/homepage/laptop-seq/laptop-loop.mp4" style={{ height, left: x }} muted loop />
            </VideoLoopWrapper>
        </Laptop>
    )
}

export default LaptopSequence;