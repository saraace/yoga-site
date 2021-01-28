import { useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import { isIE, isEdge, isIOS } from 'react-device-detect';
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
// Yoga 
import YogaScene from "./YogaScene";
// FIIT
import FiitScene from "./FiitScene"; 
// Restore
import RestoreScene from "./RestoreScene";
// Locations and Sign up form scenes
import BottomScene from "./BottomScene";

const Homepage = () => {

    // set to true if fallback scenes are needed.
    const staticScenes = isIE || isEdge;
    //const staticScenes = true;

    // indicators used for development
    const indicators = false;

    // set to true when the user refreshes the page
    const [ refresh, setRefresh ] = useState(false);

    // set to true if mobile device
    const [ isMobile, setIsMobile ] = useState(false);

    // framer motion motion value for distance scrolled down page
    const { scrollY } = useViewportScroll();

    // distance scrolled down page
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
    const sceneDurations = [900, 10000, 0, 4000, 1500, 1500];

    // heights is duration + scene height
    const sceneHeights = [0, 900, 10900, 10900, 14900, 16400];

    const calculateDimensions = () => {
        
        // get width and height of window
        const w = window.innerWidth;
        const h = window.innerHeight + (isIOS? 120 : 0);

        // calculate window ratio
        const ratio = h/w;

        // if the window is tall, the assets height must be 100% while the width is cropped
        // if the window is wide, the assets width must be 100% while the height is cropped
        const tall = ratio > 9/16;

        // calculate dimensions for image in order to cover window
        var imageH = 0; 
        var imageW = 0;


        if(w <= 768){
            imageH = (tall)? h : (w * (16/9));
            imageW = (tall)? (h * (9/16)) : w;

            if(imageW < w){
                imageW = w;
                imageH = w * (16/9);
            }

        } else{
            imageH = (tall)? h : (w * (9/16)); 
            imageW = (tall)? (h * (16/9)) : w;
        }

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

        /* console.log('w = ', w);
        console.log('h = ', h);
        console.log('sw = ', imageW);
        console.log('sh = ', imageH);
        console.log('x = ', xOffset);
        console.log('y = ', yOffset); */

        // determine if mobile layout should be used
        setIsMobile(w <= 768);

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
                if(!isIOS){
                    calculateDimensions();
                }
            }, 250);
        };

        window.addEventListener('resize', resizeListener);

        // jump to top of the page on refresh
        window.onbeforeunload = () => {
            setRefresh(true)
            window.scrollTo(0, 0);
        }

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
        <div style={{ opacity: refresh? 0 : 1 }}>
            <div>
                <ScrollIndicator {...{ isMobile, height }} />
                {sceneDurations.map((duration, idx) => {         

                    const startPos = (idx > 0)? sceneHeights[idx]+(height*idx) : 0;
                    const endPos = startPos+duration;
                    const nextStartPos = (idx+1 <= 5)? sceneHeights[idx+1]+(height*(idx+1)) : 0;

                    const progress = yVal<=startPos? 0 : (yVal>=endPos? 1 : (yVal-startPos)/duration);

                    return(
                        <div key={idx} style={(staticScenes || (isMobile && idx === 2))? {} : { height: height+duration }}>
                            <Scene className={(staticScenes || (isMobile && idx === 2))? '' : 'sticky'} >
                            {!staticScenes && indicators && <ProgressIndicators {...{ yVal, progress, duration, startPos, endPos }} />}
                            {idx === 0 && <ShiftSequence {...{ staticScenes, isMobile, scrollY, yVal, width, height, x, y, sw, sh }} />}
                            {idx === 1 && <LivingRoom {...{ staticScenes, isMobile, scrollY, progress, startPos, nextStartPos, duration, width, height, x, y, sw, sh, offsetStyles, coverStyles }} />}
                            {idx === 2 && <Instructors {...{ staticScenes, isMobile, scrollY, startPos, nextStartPos, width, height }} />}
                            {idx === 3 && <YogaScene {...{ staticScenes, isMobile, scrollY, yVal, progress, startPos, nextStartPos, width, height, x, y, sw, sh, offsetStyles }} />}
                            {idx === 4 && <FiitScene {...{ staticScenes, isMobile, scrollY, yVal, duration, startPos, nextStartPos, offsetStyles, height }} />}
                            {idx === 5 && <RestoreScene {...{ staticScenes, isMobile, scrollY, yVal, duration, startPos, nextStartPos:startPos+duration+height, offsetStyles, height }} />}
                            </Scene>
                        </div>
                    )
                })}
            </div>
            <BottomScene {...{ staticScenes, isMobile, scrollY, yVal, startPos: sceneHeights[sceneHeights.length-1]+(height*(sceneHeights.length-1)), height }} />
        </div>
    )
}

export default Homepage;    