import React, { useState, useRef, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import smoothscroll from 'smoothscroll-polyfill';
import window from "global";
//import { disableScroll, enableScroll } from "../../services/utils";

import { SceneWrapper } from "./styles";
import ProgressIndicators from "./ProgressIndicators";

// Scroll Indicator
import ScrollIndicator from "./ScrollIndicator";
// Shift Sequence Animation 
import ShiftSequence from "./ShiftSequence"; 
// Living Room 
import LivingRoom from "./LivingRoomScene"; 
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

    // dimensions of window
    const [width, setWidth] = useState(0); 
    const [height, setHeight] = useState(0);

    // coordinates for image sequence canvas
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    const [ sw, setSw ] = useState(0);
    const [ sh, setSh ] = useState(0);
    const [ offsetStyles, setOffsetStyles ] = useState({});
    
    // duration is how many pixels scene will stick to top
    const sceneDurations = [240, 4000, 1000, 2500, 2500, 2500, 1000];

    // heights is duration + scene height
    const [ sceneHeights, setSceneHeights ] = useState(null);

    useEffect(() => {
        
        // get width and height of window
        const w = window.innerWidth;
        const h = window.innerHeight;

        // calculate dimensions for image in order to cover window
        const imageH = (w < h)? h : (w * (1080/1920)); 
        const imageW = (w < h)? (h * (1920/1080)) : w;

        // calculate x & y offsets
        const xOffset = (w < h) ? (((imageW-w)/2)*-1) : 0;
        const yOffset = (w < h) ? 0 : (((imageH-h)/2)*-1);

        // set 
        setWidth(w);
        setHeight(h);
        setSh(imageH);
        setSw(imageW);
        setX(xOffset); 
        setY(yOffset);

        // determine offset styles 
        setOffsetStyles((w < h)? { height: h, left: xOffset } : { width: w, top: yOffset });

    }, [window]);

    /* useEffect(() => {
        console.log("x = ", x);
        console.log("y = ", y);
        console.log("sw = ", sw);
        console.log("sh = ", sh);
        console.log("offsetStyles = ", offsetStyles);
        console.log("--------");
    }, [ x, y, sw, sh, offsetStyles ]); */

    // calculate height of each scene. 
    // heights are used for "snap to scene" trasition.
    useEffect(() => {
        smoothscroll.polyfill();
        const heights = [0];
        sceneDurations.map((duration, index) => {
            if(index < 1){
                // not pined
                //heights.push(height);
                // pined 
                heights.push(height + duration);
            } else{
                heights.push(height + duration + heights[index]);
            }
        })
        setSceneHeights(heights);
    }, [height]);

    return(
        <div>
            <ScrollIndicator />
            <Controller>
                { sceneHeights && sceneDurations.map((duration, idx) => {
                    return (
                        <Scene {...{indicators}} key={idx} triggerHook="onLeave" duration={duration} pin>
                            {(progress, event) => {
                                // prev scene
                                if(event.state === "BEFORE"){
                                    //disableScroll();
                                    window.scroll({ top: sceneHeights[idx-1] + sceneDurations[idx-1]-5, behavior: "smooth" });
                                    //enableScroll();
                                }
                                // next scene
                                if(event.state === "AFTER"){
                                    //disableScroll();
                                    window.scroll({ top: sceneHeights[idx+1], behavior: "smooth" });
                                    //enableScroll();
                                }
                                return (
                                    <SceneWrapper>
                                        {indicators && <ProgressIndicators {...{ progress, duration, startPos: sceneHeights[idx] }} />}
                                        {idx === 0 && <ShiftSequence {...{ progress, duration, width, height, x, y, sw, sh }} />}
                                        {idx === 1 && <LivingRoom {...{ active: event.state === "DURING", progress, duration, width, height, x, y, sw, sh, offsetStyles }} />}
                                        {idx === 2 && <Categories {...{ active: event.state === "DURING", offsetStyles }} />}
                                        {idx === 3 && <YogaScene {...{ active: event.state === "DURING", startPos: sceneHeights[idx], offsetStyles }} />}
                                        {idx === 4 && <FiitScene {...{ active: event.state === "DURING", startPos: sceneHeights[idx], offsetStyles }} />}
                                        {idx === 5 && <RestoreScene {...{ active: event.state === "DURING", startPos: sceneHeights[idx], offsetStyles }} />}
                                        {idx === 6 && <SignUpForm {...{ active: event.state === "DURING", startPos: sceneHeights[idx] }} /> }
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