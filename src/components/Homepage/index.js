import { useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import window from "global"; 

/* STYLES */
import { Scene } from "./styles";

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
// Locations and Sign up form scenes
import BottomScene from "./BottomScene";

const Homepage = () => {

    // indicators used for development
    const indicators = true;

    const { scrollY } = useViewportScroll();
    const [ yVal, setYVal ] = useState(0);

    // dimensions of window
    const [ width, setWidth ] = useState(0); 
    const [ height, setHeight ] = useState(0);

    // coordinates for image sequence canvas
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    const [ sw, setSw ] = useState(0);
    const [ sh, setSh ] = useState(0);
    const [ offsetStyles, setOffsetStyles ] = useState({});
    const [ coverStyles, setCoverStyles ] = useState({});
    
    // duration is how many pixels scene will stick to top
    const sceneDurations = [900, 10000, 1000, 1000, 1500, 1500, 1500];

    // heights is duration + scene height
    const sceneHeights = [0, 900, 10900, 11900, 12900, 14400, 15900, 17400];

    const calculateDimensions = () => {
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
        setCoverStyles(tall? { height: '100%', left: 0 } : { width: '100%', top: 0 });
    }

    // recalculate dimensions on window resize
    useEffect(() => {

        calculateDimensions();
        
        let timeoutId = null;

        const resizeListener = () => {
            clearTimeout(timeoutId); 
            timeoutId = setTimeout(() => {
                calculateDimensions();
            }, 250);
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }

    }, [window]);

    useEffect(() => {
        
        const updateY = () => {
            setYVal(scrollY.get());
        }

        const unsubscribe = scrollY.onChange(updateY)

        return () => {
            unsubscribe();
        }
    }, [scrollY]);

    return(
        <>
            <div>
                {sceneDurations.map((duration, idx) => {         

                    const startPos = (idx > 0)? sceneHeights[idx]+(height*idx) : 0;
                    const endPos = startPos+duration;
                    const nextStartPos = (idx+1 <= 7)? sceneHeights[idx+1]+(height*(idx+1)) : 0;

                    const progress = yVal<=startPos? 0 : (yVal>=endPos? 1 : (yVal-startPos)/duration);

                    return(
                        <div key={idx} style={{ height: height+duration }}>
                            <Scene>
                            {indicators && <ProgressIndicators {...{ yVal, progress, duration, startPos, endPos }} />}
                            {idx === 0 && <ShiftSequence {...{ scrollY, yVal, width, height, x, y, sw, sh }} />}
                            {idx === 1 && <LivingRoom {...{ scrollY, progress, startPos, nextStartPos, duration, width, height, x, y, sw, sh, offsetStyles, coverStyles }} />}
                            {idx === 2 && <Instructors {...{ scrollY, startPos, nextStartPos, width, height }} />}
                            {idx === 3 && <Categories {...{ scrollY, yVal, progress, startPos, nextStartPos, height, offsetStyles }} />}
                            {idx === 4 && <YogaScene {...{ scrollY, yVal, duration, startPos, nextStartPos, offsetStyles, height }} />}
                            {idx === 5 && <FiitScene {...{ scrollY, yVal, duration, startPos, nextStartPos, offsetStyles, height }} />}
                            {idx === 6 && <RestoreScene {...{ scrollY, yVal, duration, startPos, nextStartPos, offsetStyles, height }} />}
                            </Scene>
                        </div>
                    )
                })}
            </div>
            <BottomScene {...{ scrollY, yVal, startPos: sceneHeights[sceneHeights.length-1]+(height*(sceneHeights.length-1)), height }} />
            {/* <LocationsScene />
            <SignUpForm {...{ scrollY, yVal, startPos: sceneHeights[sceneHeights.length-1]+(height*(sceneHeights.length-1)), width, height }} /> */}
        </>
    )
}

export default Homepage;