
import { FullScreen } from "./styles"; 
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 
import PhoneSequence from "./PhoneSequence";

const LivingRoomScene = ({ progress, width, height, duration, active }) => {
    
    // coordinates and dimensions needed for draw image
    const sh = (width < height)? (width * (1080/1920)) : height; 
    const sw = (width < height)? width : (height * (1920/1080)); 
    const x = (width < height) ? 0 : (((sw-width)/2)*-1); 
    const y = (width < height) ? (((sh-height)/2)*-1) : 0; 

    const styles = (width < height)? { width, top: y } : { height, left: x};

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