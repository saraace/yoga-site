
import { FullScreen } from "./styles"; 
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 
import PhoneSequence from "./PhoneSequence";

const LivingRoomScene = ({ progress, width, height, duration, active }) => {
    
    // coordinates and dimensions needed for draw image
    const sh = (width < height)? height : (width * (1080/1920)); 
    const sw = (width < height)? (height * (1920/1080)) : width; 
    const x = (width < height) ? (((sw-width)/2)*-1) : 0; 
    const y = (width < height) ? 0 : (((sh-height)/2)*-1); 

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