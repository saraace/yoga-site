
import { FullScreen } from "./styles"; 
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 
import PhoneSequence from "./PhoneSequence";

const LivingRoomScene = ({ active, scrollY, progress, duration, width, height, x, y, sw, sh, offsetStyles, coverStyles }) => {

    return(
        <FullScreen>
            {progress >= 0 && (
                <TVSequence 
                    className={progress <= 0.5? "front" : ""} 
                    {...{ active, scrollY, progress, duration, x, y, sw, sh, width, height, offsetStyles, coverStyles }}
                />
            )}
            {progress > 0.5 && (
                <LaptopSequence 
                    className={progress > 0.5 && progress <=0.75? "front" : ""}
                    {...{ progress, duration, x, y, sw, sh, width, height, offsetStyles }} 
                />
            )}
            {/* progress > 1.3 && (
                <PhoneSequence 
                    className={progress > 0.75? "front" : ""}
                    {...{ progress, duration, x, y, sw, sh, width, height, offsetStyles }} 
                />
            ) */}
        </FullScreen>
    )
}

export default LivingRoomScene;