/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { useState, useEffect, useRef } from "react"; 
import { disableScroll, enableScroll } from "../../../../services/utils";
import Link from "next/link"; 
import { TV, VideoWrapper, SeqWrapper, VideoLoopWrapper, Text, TextContainer, Col, ButtonRow } from "./styles"; 
import TVImages from "./images";
import ImageSequence from "../../ImageSequence";

const TVSequence = ({ active, progress, duration, x, y, sw, sh, width, height, offsetStyles, ...rest }) => {

    // full screen video 
    const videoRef = useRef(null); 

    // full screen video state
    const [ videoReady, setVideoReady ] = useState(false);
    const [ videoPlaying, setVideoPlaying ] = useState(true);

    // tv loop 
    const tvLoopRef = useRef(null);

    // tv loop state
    const [ tvVideoReady, setTvVideoReady ] = useState(false);
    const [ tvPlaying, setTvPlaying ] = useState(false);

    // image sequence images
    const imageSequence = TVImages();

    // last drawn image 
    const [ canvasImage, setCanvasImage ] = useState(0);

    useEffect(() => {
        if(videoRef.current){

            // once ready set state
            videoRef.current.addEventListener("loadeddata", () => {
                setVideoReady(true);
            });

            // only play full screen video once
            videoRef.current.addEventListener("ended", () => {
                setVideoPlaying(false);
                //enableScroll();
            })
        }
    }, [videoRef]); 

    useEffect(() => {
        if(tvLoopRef.current){

            // once ready set state
            tvLoopRef.current.addEventListener("loadeddata", () => {
                setTvVideoReady(true);
            });

        }
    }, [tvLoopRef]); 

    useEffect(() => {

        // once scene is active and the video is ready - play
        if(active && videoReady){

        //disableScroll();

        // play full screen video
        videoRef.current.play();
        
        setVideoPlaying(true);
        //setCanvasImage(0);

        }

    }, [active, videoRef, videoReady]);

    useEffect(() => {

        if(progress >= 0.25){
            
            // pause tv video
            setTvPlaying(false);

            // current id
            const id = Math.round((progress-0.25) * duration);

            if(id <= 239){    
                setCanvasImage(id);
            } 
            // image sequence is complete
            else {
                // play tv video
                setTvPlaying(true);
                setCanvasImage(239);
            }
        }
        else{
            setTvPlaying(false);
            setCanvasImage(0);
        }

    }, [progress, duration]);

    useEffect(() => {
        if(tvVideoReady && tvPlaying){
            tvLoopRef.current.play();
        } else{
            tvLoopRef.current.pause();
        }
    }, [tvVideoReady, tvPlaying])

    return(
        <TV {...rest}>
            <VideoWrapper className={videoPlaying ? "front" : ""}>
                <video ref={videoRef} src="/images/homepage/tv-seq/bg.mp4" style={offsetStyles} muted />
            </VideoWrapper>
            <SeqWrapper className={videoPlaying? "" : "front"}>
                <ImageSequence {...{ imageSequence, canvasImage, width, height, x, y, sw, sh }} />
            </SeqWrapper>
            <VideoLoopWrapper className={tvPlaying? "front" : ""}>
                <img src="/images/homepage/tv-seq/tv-seq-00240.png" style={offsetStyles} />
                <video ref={tvLoopRef} src="/images/homepage/tv-seq/tv-loop.mp4" style={offsetStyles} muted loop />
            </VideoLoopWrapper>
            <Text>
                <TextContainer>
                    <Col>
                        <h1>We Are More Than Fitness</h1>
                        <p>Experience our yoga, FIIT &amp; restore classes, in-studio or online.</p>
                        <ButtonRow>
                            <Button variant="secondary-outline">Watch Video</Button>
                            <Link href="/sign-up">
                                <a sx={{ variant: 'buttons.primary' }}>Sign Up</a>
                            </Link>
                        </ButtonRow> 
                    </Col>
                </TextContainer>
            </Text>
        </TV>
    )
}

export default TVSequence;