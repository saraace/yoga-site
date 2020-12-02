import { useRef, useState, useEffect } from "react";
import { Laptop, SeqWrapper, VideoLoopWrapper} from "./styles"; 

const PhoneSequence = ({ width, height, progress, duration, x, y, sw, sh, styles, ...rest }) => {

    // phone loop 
    const phoneLoopRef = useRef(null);

    // phone loop state
    const [ phoneVideoReady, setPhoneVideoReady ] = useState(false);
    const [ phonePlaying, setPhonePlaying ] = useState(false);
    
    // canvas
    const canvasRef = useRef(null);
    const [ context, setContext ] = useState(null);

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    // generate frame url based on index specified
    const getFrame = index => (`/images/homepage/phone-seq/shift_websiteAnim_v05_${index.toString().padStart(5, "0")}.jpg`);

    useEffect(() => {
        if(phoneLoopRef.current){

            // once ready set state
            phoneLoopRef.current.addEventListener("loadeddata", () => {
                setPhoneVideoReady(true);
            });

        }
    }, [phoneLoopRef]); 

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

        if(progress >= 0.75){ 

            // pause phone video
            setPhonePlaying(false);

            // current id
            const id = Math.round((progress-0.75) * duration);

            if(id <= 59){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play phone video
                setPhonePlaying(true);
                setCanvasImage(59);
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
                <canvas ref={canvasRef} {...{ width, height }} />
            </SeqWrapper>
            <VideoLoopWrapper className={phonePlaying? "front" : ""}>
                <img src="/images/homepage/phone-seq/shift_websiteAnim_v05_00060.png" style={styles} />
                <video ref={phoneLoopRef} src="/images/homepage/phone-seq/phone-loop.mp4" style={styles} muted loop />
            </VideoLoopWrapper>
        </Laptop>
    )
}

export default PhoneSequence;