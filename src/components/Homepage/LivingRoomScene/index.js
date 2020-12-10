import { useEffect, useState } from "react";

/* STYLES */
import { FullScreen } from "./styles"; 

/* COMPONENTS */
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 
import PhoneSequence from "./PhoneSequence";

const LivingRoomScene = ({ scrollY, progress, duration, nextStartPos, width, height, x, y, sw, sh, offsetStyles, coverStyles }) => {

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
        <FullScreen>
            {tvSequence && (
                <TVSequence 
                    className={progress <= 0.4375? "front" : ""} 
                    {...{ scrollY, progress, duration, x, y, sw, sh, width, height, offsetStyles, coverStyles }}
                />
            )}
            {progress > 0.375 && (
                <LaptopSequence 
                    className={progress > 0.4375 && progress <=0.6875? "front" : ""}
                    {...{ progress, duration, x, y, sw, sh, width, height, offsetStyles }} 
                />
            )}
            {progress > 0.625 && (
                <PhoneSequence 
                    className={progress > 0.6875? "front" : ""}
                    {...{ scrollY, progress, duration, nextStartPos, x, y, sw, sh, width, height, offsetStyles }} 
                />
            )}
        </FullScreen>
    )
}

export default LivingRoomScene;