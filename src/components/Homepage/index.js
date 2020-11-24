import React, { useState, useRef, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import smoothscroll from 'smoothscroll-polyfill';

import { SceneWrapper } from "./styles";

import ProgressIndicators from "./ProgressIndicators";

// Disciplines
import Scene08 from "./Scene08"; 
import Scene09 from "./Scene09"; 
import Scene10 from "./Scene10"; 
import Scene11 from "./Scene11"; 
import Scene12 from "./Scene12"; 

const Homepage = () => {

    const indicators = true;

    const scenes = useRef([
        React.createRef(), 
        React.createRef(), 
        React.createRef(),
        React.createRef(), 
        React.createRef()
    ]);
    const sceneDurations = [1000, 2500, 2500, 2500, 1000];
    const [sceneHeights, setSceneHeights] = useState([ 0, 0, 0, 0, 0 ]);

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
                        return (
                            <SceneWrapper ref={scenes.current[0]}>
                                {indicators && <ProgressIndicators {...{progress, startPos: sceneHeights[0], duration: sceneDurations[0]}} />}
                                <Scene08 {...{ progress }} />
                            </SceneWrapper>
                        )
                    }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[1]} pin>
                        {(progress, event) => {
                            if(event.state === "AFTER"){
                                window.scroll({ top: sceneHeights[2], left: 0, behavior: 'smooth' }); 
                            } else if(event.state === "BEFORE"){
                                window.scroll({ top: 0, left: 0, behavior: 'smooth' }); 
                            }
                            return (
                                <SceneWrapper ref={scenes.current[1]}>
                                    {indicators && <ProgressIndicators {...{progress, startPos: sceneHeights[1], duration: sceneDurations[1]}} />}
                                    <Scene09 {...{ progress, startPos: sceneHeights[1], duration: sceneDurations[1] }} />
                                </SceneWrapper>
                            )
                        }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[2]} pin>
                        {(progress, event) => {
                            if(event.state === "AFTER"){
                                window.scroll({ top: sceneHeights[3], left: 0, behavior: 'smooth' }); 
                            } else if(event.state === "BEFORE"){
                                window.scroll({ top: sceneHeights[1], left: 0, behavior: 'smooth' }); 
                            }
                            return (
                                <div ref={scenes.current[2]}>
                                    <Scene10 />
                                </div>
                            )
                        }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[3]} pin>
                        {(progress, event) => {
                            if(event.state === "AFTER"){
                                window.scroll({ top: sceneHeights[4], left: 0, behavior: 'smooth' }); 
                            } else if(event.state === "BEFORE"){
                                window.scroll({ top: sceneHeights[2], left: 0, behavior: 'smooth' }); 
                            }
                            return (
                                <div ref={scenes.current[3]}>
                                    <Scene11 />
                                </div>
                            )
                        }}
                </Scene>
                <Scene {...{indicators}} triggerHook="onLeave" duration={sceneDurations[4]} pin>
                        {(progress, event) => {
                            if(event.state === "AFTER"){

                            } else if(event.state === "BEFORE"){
                                window.scroll({ top: sceneHeights[3], left: 0, behavior: 'smooth' }); 
                            }
                            return (
                                <div ref={scenes.current[4]}>
                                    <Scene12 />
                                </div>
                            )
                        }}
                </Scene>
            </Controller>
        </div>
    )
}

export default Homepage;