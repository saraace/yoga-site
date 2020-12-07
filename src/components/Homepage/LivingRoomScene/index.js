
import { FullScreen } from "./styles"; 
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 
import PhoneSequence from "./PhoneSequence";

const LivingRoomScene = ({ active, progress, duration, width, height, x, y, sw, sh, offsetStyles }) => {

    return(
        <FullScreen>
            {progress >= 0 && (
                <TVSequence 
                    className={progress <= 0.5? "front" : ""} 
                    {...{ active, progress, duration, x, y, sw, sh, width, height, offsetStyles }}
                />
            )}
            {progress > 0.4 && (
                <LaptopSequence 
                    className={progress > 0.5 && progress <=0.75? "front" : ""}
                    {...{ progress, duration, x, y, sw, sh, width, height, offsetStyles }} 
                />
            )}
            {progress > 0.65 && (
                <PhoneSequence 
                    className={progress > 0.75? "front" : ""}
                    {...{ progress, duration, x, y, sw, sh, width, height, offsetStyles }} 
                />
            )}
        </FullScreen>
    )
}

export default LivingRoomScene;