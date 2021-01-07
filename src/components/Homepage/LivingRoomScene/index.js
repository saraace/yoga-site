import { useEffect, useState } from "react";

/* STYLES */
import { FullScreen } from "./styles"; 

/* COMPONENTS */
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 
import PhoneSequence from "./PhoneSequence";

const LivingRoomScene = ({ staticScenes, isMobile, scrollY, progress, duration, nextStartPos, width, height, x, y, sw, sh, offsetStyles, coverStyles }) => {

    const [ tvSequence, setTvSequence ] = useState(false);

    useEffect(() => {

        function loadImageSequences() {
            if(scrollY.current >= 400 && !tvSequence){
                setTvSequence(true);
            }
        }

        const unsubscribeY = scrollY.onChange(loadImageSequences);

        return () => {
            unsubscribeY();
        }

    }, [scrollY]);

    return(
        <FullScreen className={ staticScenes? "static" : "animated"}>
            {!staticScenes&& (
                <>
                {tvSequence && (
                    <TVSequence 
                        className={progress <= 0.4375? "front" : ""} 
                        {...{ staticScenes, isMobile, scrollY, progress, duration, x, y, sw, sh, width, height, offsetStyles, coverStyles }}
                    />
                )}
                {progress > 0.28 && (
                    <LaptopSequence 
                        style={{ x: progress > 0.43? 0: -268 }}
                        className={progress > 0.4375 && progress <=0.6875? "front" : ""}
                        {...{ staticScenes, isMobile, progress, duration, x, y, sw, sh, width, height, offsetStyles }} 
                    />
                )}
                {progress > 0.57 && (
                    <PhoneSequence 
                        className={progress > 0.6875? "front" : ""}
                        {...{ staticScenes, isMobile, scrollY, progress, duration, nextStartPos, x, y, sw, sh, width, height, offsetStyles }} 
                    />
                )}
                </>
            )}
            {staticScenes && (
                <>
                    <TVSequence {...{ staticScenes, isMobile }} />
                    <LaptopSequence {...{ staticScenes, isMobile }} />
                    <PhoneSequence {...{ staticScenes, isMobile }} />
                </>
            )}
        </FullScreen>
    )
}

export default LivingRoomScene;