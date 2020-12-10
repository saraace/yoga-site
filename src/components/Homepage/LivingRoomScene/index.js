import { useEffect, useState } from "react";

/* STYLES */
import { FullScreen } from "./styles"; 

/* COMPONENTS */
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 
import PhoneSequence from "./PhoneSequence";

const LivingRoomScene = ({ scrollY, progress, duration, width, height, x, y, sw, sh, offsetStyles, coverStyles }) => {

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
                    className={progress <= 0.35? "front" : ""} 
                    {...{ scrollY, progress, duration, x, y, sw, sh, width, height, offsetStyles, coverStyles }}
                />
            )}
            {progress > 0.3 && (
                <LaptopSequence 
                    className={progress > 0.35 && progress <=0.6? "front" : ""}
                    {...{ progress, duration, x, y, sw, sh, width, height, offsetStyles }} 
                />
            )}
            {progress > 0.5 && (
                <PhoneSequence 
                    className={progress > 0.55? "front" : ""}
                    {...{ progress, duration, x, y, sw, sh, width, height, offsetStyles }} 
                />
            )}
        </FullScreen>
    )
}

export default LivingRoomScene;