import { useState, useEffect, forwardRef } from "react"; 
import { FullScreen, VideoWrapper } from "./styles"; 

const Scene02 = forwardRef(({ active }, ref) => {

    const [ play, setPlay ] = useState(false);

    useEffect(() => {
        if(ref){
            ref.current.addEventListener("loadeddata", () => {
                setPlay(true);
            });
        }
    }, [ref]);

   useEffect(() => {
        if(active && play){
            ref.current.play();
        } else if(!active){
            ref.current.pause();
        }
    }, [active, ref, play]);

    return(
        <FullScreen>
            <VideoWrapper>
                <video ref={ref} src="/images/homepage/scene-02/bg.mp4" muted />
            </VideoWrapper>
        </FullScreen>
    )
})

export default Scene02;