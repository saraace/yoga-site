import React, { useState, useRef, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import smoothscroll from 'smoothscroll-polyfill';

import { SceneWrapper } from "./styles";
import ProgressIndicators from "./ProgressIndicators";

// Shift Animation 
import Scene01 from "./Scene01"; 
// Disciplines
import Scene08 from "./Scene08"; 
// Yoga
import Scene09 from "./Scene09"; 
// FIIT
import Scene10 from "./Scene10"; 
// Restore
import Scene11 from "./Scene11"; 
// App Links & Form
import Scene12 from "./Scene12"; 

const Homepage = () => {

    const indicators = true;

    const scenes = useRef([
        React.createRef(),
        React.createRef(), 
        React.createRef(), 
        React.createRef(),
        React.createRef(), 
        React.createRef()
    ]);
    const sceneDurations = [1000, 1000, 2500, 2500, 2500, 1000];
    const [sceneHeights, setSceneHeights] = useState([ 0, 0, 0, 0, 0, 0 ]);

    const scene8Ref = useRef(null);
    const scene9Ref = useRef(null);
    const scene10Ref = useRef(null);
    const scene11Ref = useRef(null);
    const scene12Ref = useRef(null);

    useEffect(() => {
        smoothscroll.polyfill();
        const heights = [0];
        scenes.current.map((ref, index) => {
            if(ref.current){
                heights.push(heights[index] + ref.current.clientHeight + sceneDurations[index]);
            }
        })
        setSceneHeights(heights);
    }, [scenes]);

    return(
        <div>
            <Controller>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[0]} pin>
                    {(progress, event) => {
                        if(event.state === "AFTER"){
                            window.scroll({ top: sceneHeights[1], left: 0, behavior: 'smooth' }); 
                        } 
                        return(
                            <SceneWrapper ref={scenes.current[0]}>
                                {indicators && <ProgressIndicators {...{progress, startPos: sceneHeights[0], duration: sceneDurations[0]}} />}
                                <Scene01 />
                            </SceneWrapper>
                        )
                    }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[1]} pin>
                    {(progress, event) => {
                        if(event.state === "AFTER"){
                            window.scroll({ top: sceneHeights[2], left: 0, behavior: 'smooth' }); 
                        } else if(event.state === "BEFORE"){
                            window.scroll({ top: sceneHeights[0] + sceneDurations[0], left: 0, behavior: 'smooth' }); 
                        }
                        return (
                            <SceneWrapper ref={scenes.current[1]}>
                                {indicators && <ProgressIndicators {...{progress, startPos: sceneHeights[1], duration: sceneDurations[1]}} />}
                                <Scene08 ref={scene8Ref} {...{ active: event.state === "DURING" }} />
                            </SceneWrapper>
                        )
                    }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[2]} pin>
                        {(progress, event) => {
                            if(event.state === "AFTER"){
                                window.scroll({ top: sceneHeights[3], left: 0, behavior: 'smooth' }); 
                            } else if(event.state === "BEFORE"){
                                window.scroll({ top: sceneHeights[1] + sceneDurations[1], left: 0, behavior: 'smooth' }); 
                            }
                            return (
                                <SceneWrapper ref={scenes.current[2]}>
                                    {indicators && <ProgressIndicators {...{progress, startPos: sceneHeights[2], duration: sceneDurations[2]}} />}
                                    <Scene09 ref={scene9Ref} {...{ active: event.state === "DURING", startPos: sceneHeights[2] }} />
                                </SceneWrapper>
                            )
                        }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[3]} pin>
                        {(progress, event) => {
                            if(event.state === "AFTER"){
                                window.scroll({ top: sceneHeights[4], left: 0, behavior: 'smooth' }); 
                            } else if(event.state === "BEFORE"){
                                window.scroll({ top: sceneHeights[2] + sceneDurations[2], left: 0, behavior: 'smooth' }); 
                            }
                            return (
                                <SceneWrapper ref={scenes.current[3]}>
                                    {indicators && <ProgressIndicators {...{progress, startPos: sceneHeights[3], duration: sceneDurations[3]}} />}
                                    <Scene10 ref={scene10Ref} {...{ active: event.state === "DURING", startPos: sceneHeights[3] }} />
                                </SceneWrapper>
                            )
                        }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[4]} pin>
                        {(progress, event) => {
                            if(event.state === "AFTER"){
                                window.scroll({ top: sceneHeights[5], left: 0, behavior: 'smooth' }); 
                            } else if(event.state === "BEFORE"){
                                window.scroll({ top: sceneHeights[3] + sceneDurations[3], left: 0, behavior: 'smooth' }); 
                            }
                            return (
                                <SceneWrapper ref={scenes.current[4]}>
                                    {indicators && <ProgressIndicators {...{progress, startPos: sceneHeights[4], duration: sceneDurations[4]}} />}
                                    <Scene11 ref={scene11Ref} {...{ active: event.state === "DURING", startPos: sceneHeights[4] }} />
                                </SceneWrapper>
                            )
                        }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[5]} pin>
                        {(progress, event) => {
                            if(event.state === "BEFORE"){
                                window.scroll({ top: sceneHeights[4] + sceneDurations[4], left: 0, behavior: 'smooth' }); 
                            }
                            return (
                                <SceneWrapper ref={scenes.current[5]}>
                                    {indicators && <ProgressIndicators {...{progress, startPos: sceneHeights[5], duration: sceneDurations[5]}} />}
                                    <Scene12 ref={scene12Ref} {...{ active: event.state === "DURING", startPos: sceneHeights[5] }} />
                                </SceneWrapper>
                            )
                        }}
                </Scene>
            </Controller>
        </div>
    )
}

export default Homepage;