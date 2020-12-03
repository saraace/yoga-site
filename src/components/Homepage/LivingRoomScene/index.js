
import { FullScreen } from "./styles"; 
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 
import PhoneSequence from "./PhoneSequence";

const LivingRoomScene = ({ progress, duration, width, height, x, y, sw, sh, active }) => {

    const styles = (width < height)? { height, left: x} : { width, top: y };

    return(
        <FullScreen>
            <TVSequence 
                className={progress <= 0.5? "front" : ""} 
                {...{ active, progress, duration, x, y, sw, sh, width, height, styles }}
            />
            <LaptopSequence 
                className={progress > 0.5 && progress <=0.75? "front" : ""}
                {...{ progress, duration, x, y, sw, sh, width, height, styles }} 
            />
            <PhoneSequence 
                className={progress > 0.75? "front" : ""}
                {...{ progress, duration, x, y, sw, sh, width, height, styles }} 
            />
        </FullScreen>
    )
}

export default LivingRoomScene;