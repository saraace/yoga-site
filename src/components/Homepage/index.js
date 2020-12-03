import React, { useState, useRef, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import smoothscroll from 'smoothscroll-polyfill';
import window from "global";
import { disableScroll, enableScroll } from "../../services/utils";

import { SceneWrapper } from "./styles";
import ProgressIndicators from "./ProgressIndicators";

// Shift Sequence Animation 
import ShiftSequence from "./ShiftSequence"; 
// Living Room 
import LivingRoom from "./LivingRoomScene"; 
// Disciplines
import Scene08 from "./Scene08"; 
// Yoga
import Scene09 from "./Scene09"; 
// FIIT
import Scene10 from "./Scene10"; 
// Restore
import Scene11 from "./Scene11"; 
// Sign Up Form
import Scene12 from "./Scene12"; 

const Homepage = () => {

    // indicators used for development
    const indicators = true;

    // dimensions of window
    const [width, setWidth] = useState(0); 
    const [height, setHeight] = useState(0);
    
    // duration is how many pixels scene will stick to top
    const sceneDurations = [1000, 4000, 1000, 2500, 2500, 2500, 1000];

    // heights is duration + scene height
    const [ sceneHeights, setSceneHeights ] = useState(null);

    // TODO: NOT SURE I NEED THESE REFS
    //const scene2Ref = useRef(null);
    const scene8Ref = useRef(null);
    const scene9Ref = useRef(null);
    const scene10Ref = useRef(null);
    const scene11Ref = useRef(null);
    const scene12Ref = useRef(null);

    // get width and height of window
    useEffect(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }, [window]);

    // calculate height of each scene. 
    // heights are used for "snap to scene" trasition.
    useEffect(() => {
        smoothscroll.polyfill();
        const heights = [0];
        sceneDurations.map((duration, index) => {
            if(index < 1){
                heights.push(height + duration);
            } else{
                heights.push(height + duration + heights[index]);
            }
        })
        setSceneHeights(heights);
    }, [height]);

    return(
        <div>
            <Controller>
                {sceneHeights && sceneDurations.map((duration, idx) => {
                    return (
                        <Scene {...{indicators}} key={idx} triggerHook="onLeave" duration={duration} pin>
                            {(progress, event) => {
                                // prev scene
                                if(event.state === "BEFORE"){
                                    disableScroll();
                                    window.scroll({ top: sceneHeights[idx-1] + sceneDurations[idx-1]-5, behavior: "smooth" });
                                    enableScroll();
                                }
                                // next scene
                                if(event.state === "AFTER"){
                                    disableScroll();
                                    window.scroll({ top: sceneHeights[idx+1], behavior: "smooth" });
                                    enableScroll();
                                }
                                return (
                                    <SceneWrapper>
                                        {indicators && <ProgressIndicators {...{progress, duration, startPos: sceneHeights[idx] }} />}
                                        {idx === 0 && <ShiftSequence />}
                                        {idx === 1 && <LivingRoom {...{ progress, width, height, duration, active: event.state === "DURING" }} />}
                                        {idx === 2 && <Scene08 ref={scene8Ref} {...{ active: event.state === "DURING" }} />}
                                        {idx === 3 && <Scene09 ref={scene9Ref} {...{ active: event.state === "DURING", startPos: sceneHeights[idx] }} />}
                                        {idx === 4 && <Scene10 ref={scene10Ref} {...{ active: event.state === "DURING", startPos: sceneHeights[idx] }} />}
                                        {idx === 5 && <Scene11 ref={scene11Ref} {...{ active: event.state === "DURING", startPos: sceneHeights[idx] }} />}
                                        {idx === 6 && <Scene12 ref={scene12Ref} {...{ active: event.state === "DURING", startPos: sceneHeights[idx] }} /> }
                                    </SceneWrapper>
                                );
                            }}
                        </Scene>
                    )
                })}
            </Controller>
        </div>
    )
}

export default Homepage;