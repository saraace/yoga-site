
import { FullScreen } from "./styles"; 
import TVSequence from "./TVSequence";
import LaptopSequence from "./LaptopSequence"; 

const LivingRoomScene = ({ progress, width, height, duration, active }) => {
    
    // coordinates and dimensions needed for draw image
    const sh = height; 
    const sw = (sh * (1920/1080)); 
    const x = (((sw-width)/2)*-1); 
    const y = 0; 

    return(
        <FullScreen>
            <TVSequence 
                className={progress <= 0.5? "front" : ""} 
                {...{ active, progress, duration, x, y, sw, sh, width, height }}
            />
            <LaptopSequence 
                className={progress > 0.5 && progress <=0.75? "front" : ""}
                {...{ progress, duration, x, y, sw, sh, width, height }} 
            />
        </FullScreen>
    )
}

export default LivingRoomScene;