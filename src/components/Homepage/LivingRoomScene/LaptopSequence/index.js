import { useRef, useState, useEffect } from "react";
import { Laptop, SeqWrapper, VideoLoopWrapper} from "./styles"; 
import LaptopImages from "./images";
import ImageSequence from "../../ImageSequence";

const LaptopSequence = ({ width, height, progress, duration, x, y, sw, sh, offsetStyles, ...rest }) => {

    // laptop loop 
    const laptopLoopRef = useRef(null);

    // laptop loop state
    const [ laptopVideoReady, setLaptopVideoReady ] = useState(false);
    const [ laptopPlaying, setLaptopPlaying ] = useState(false);

    // sequence images
    const imageSequence = LaptopImages();

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // generate frame url based on index specified
    const getFrame = index => (`/images/homepage/laptop-seq/laptop-seq-${index.toString().padStart(5, "0")}.jpg`);

    useEffect(() => {
        if(laptopLoopRef.current){

            // once ready set state
            laptopLoopRef.current.addEventListener("loadeddata", () => {
                setLaptopVideoReady(true);
            });

        }
    }, [laptopLoopRef]); 

    useEffect(() => {

        if(progress >= 0.5){ 

            // pause laptop video
            setLaptopPlaying(false);

            // current id
            const id = Math.round((progress-0.5) * duration);

            if(id <= 239){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play laptop video
                setLaptopPlaying(true);
                setCanvasImage(239);
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
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <VideoLoopWrapper className={laptopPlaying? "front" : ""}>
                <img src="/images/homepage/laptop-seq/laptop-seq-00239.png" style={offsetStyles} />
                <video ref={laptopLoopRef} src="/images/homepage/laptop-seq/laptop-loop.mp4" style={offsetStyles} muted loop />
            </VideoLoopWrapper>
        </Laptop>
    )
}

export default LaptopSequence;