import { useRef, useState, useEffect } from "react";
import { Laptop, SeqWrapper, VideoLoopWrapper} from "./styles"; 
import PhoneImages from "./images"; 
import ImageSequence from "../../ImageSequence"; 

const PhoneSequence = ({ width, height, progress, duration, x, y, sw, sh, offsetStyles, ...rest }) => {

    // phone loop 
    const phoneLoopRef = useRef(null);

    // phone loop state
    const [ phoneVideoReady, setPhoneVideoReady ] = useState(false);
    const [ phonePlaying, setPhonePlaying ] = useState(false);

    // sequence images
    const imageSequence = PhoneImages();

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // generate frame url based on index specified
    const getFrame = index => (`/images/homepage/phone-seq/phone-seq-${index.toString().padStart(5, "0")}.jpg`);

    useEffect(() => {
        if(phoneLoopRef.current){

            // once ready set state
            phoneLoopRef.current.addEventListener("loadeddata", () => {
                setPhoneVideoReady(true);
            });

        }
    }, [phoneLoopRef]); 

    useEffect(() => {

        if(progress >= 0.75){ 

            // pause phone video
            setPhonePlaying(false);

            // current id
            const id = Math.round((progress-0.75) * duration);

            if(id <= 238){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play phone video
                setPhonePlaying(true);
                setCanvasImage(238);
            }

        } 
        else{
            setPhonePlaying(false);
            setCanvasImage(0);
        }

    }, [progress]);

    useEffect(() => {
        if(phoneVideoReady && phonePlaying){
            phoneLoopRef.current.play();
        } else{
            phoneLoopRef.current.pause();
        }
    }, [phoneVideoReady, phonePlaying])

    return(
        <Laptop {...rest}>
            <SeqWrapper className={phonePlaying? "" : "front"}>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <VideoLoopWrapper className={phonePlaying? "front" : ""}>
                <img src="/images/homepage/phone-seq/phone-seq-00239.png" style={offsetStyles} />
                <video ref={phoneLoopRef} src="/images/homepage/phone-seq/phone-loop.mp4" style={offsetStyles} muted loop />
            </VideoLoopWrapper>
        </Laptop>
    )
}

export default PhoneSequence;