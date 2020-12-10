import { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { useViewportScroll } from "framer-motion";
import window from "global"; 

/* STYLES */
import { SceneWrapper } from "./styles";

/* COMPONENTS */
import ProgressIndicators from "./ProgressIndicators";
// Scroll Down Arrow
import ScrollIndicator from "./ScrollIndicator";
// Shift Sequence Animation 
import ShiftSequence from "./ShiftSequence"; 
// Living Room 
import LivingRoom from "./LivingRoomScene"; 
// World Class Instructors 
import Instructors from "./Instructors"; 
// Categories
import Categories from "./Categories"; 
// Yoga
import YogaScene from "./YogaScene"; 
// FIIT
import FiitScene from "./FiitScene"; 
// Restore
import RestoreScene from "./RestoreScene"; 
// Sign Up Form
import SignUpForm from "./SignUpForm"; 

const Homepage = () => {

    // indicators used for development
    const indicators = true;

    const { scrollY } = useViewportScroll();

    // dimensions of window
    const [width, setWidth] = useState(0); 
    const [height, setHeight] = useState(0);

    // coordinates for image sequence canvas
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    const [ sw, setSw ] = useState(0);
    const [ sh, setSh ] = useState(0);
    const [ offsetStyles, setOffsetStyles ] = useState({});
    const [ coverStyles, setCoverStyles ] = useState({});
    
    // duration is how many pixels scene will stick to top
    const sceneDurations = [400, 8000, 1000, 1000, 2500, 2500, 2500, 1000];

    // heights is duration + scene height
    const sceneHeights = [0, 400, 8400, 9400, 10400, 12900, 15400, 17900, 18900];

    useEffect(() => {
        
        // get width and height of window
        const w = window.innerWidth;
        const h = window.innerHeight;

        // calculate window ratio
        const ratio = h/w;

        // if the window is tall, the assets height must be 100% while the width is cropped
        // if the window is wide, the assets width must be 100% while the height is cropped
        const tall = ratio > 1080/1920;

        // calculate dimensions for image in order to cover window
        var imageH = (tall)? h : (w * (1080/1920)); 
        var imageW = (tall)? (h * (1920/1080)) : w;

        // calculate x & y offsets
        const xOffset = (tall) ? (((imageW-w)/2)*-1) : 0;
        const yOffset = (tall) ? 0 : (((imageH-h)/2)*-1);

        // set 
        setWidth(w);
        setHeight(h);
        setSh(imageH);
        setSw(imageW);
        setX(xOffset); 
        setY(yOffset);

        // determine offset styles 
        setOffsetStyles((tall)? { height: h, left: xOffset } : { width: w, top: yOffset, left: 0 });
        setCoverStyles(tall? { height: '100%', left: 0, top: 0 } : { width: '100%', top: 0, left:0 });

    }, [window]);

    return(
        <div>
            <ScrollIndicator />
            <Controller>
                { sceneDurations.map((duration, idx) => {
                    return (
                        <Scene {...{indicators}} key={idx} triggerHook="onLeave" duration={duration} pin>
                            {(progress, event) => {
                                
                                const startPos = (idx > 0)? sceneHeights[idx]+(height*idx) : 0;
                                const nextStartPos = (idx+1 < 7)? sceneHeights[idx+1]+(height*(idx+1)) : 0;

                                return (
                                    <SceneWrapper initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} >
                                        {indicators && <ProgressIndicators {...{ progress, duration, startPos }} />}
                                        {idx === 0 && <ShiftSequence {...{ scrollY, width, height, x, y, sw, sh }} />}
                                        {idx === 1 && <LivingRoom {...{ scrollY, progress, startPos, nextStartPos, duration, width, height, x, y, sw, sh, offsetStyles, coverStyles }} />}
                                        {idx === 2 && <Instructors {...{ scrollY, progress, startPos, nextStartPos, duration, coverStyles }} />}
                                        {idx === 3 && <Categories {...{ scrollY, progress, startPos, nextStartPos, height, offsetStyles }} />}
                                        {idx === 4 && <YogaScene {...{ active: event.state === "DURING", startPos, offsetStyles }} />}
                                        {idx === 5 && <FiitScene {...{ active: event.state === "DURING", startPos, offsetStyles }} />}
                                        {idx === 6 && <RestoreScene {...{ active: event.state === "DURING", startPos, offsetStyles }} />}
                                        {idx === 7 && <SignUpForm {...{ active: event.state === "DURING", startPos }} /> }
                                    </SceneWrapper>
                                );
                            }}
                        </Scene>
                    )
                }) }
            </Controller>
        </div>
    )
}

export default Homepage;