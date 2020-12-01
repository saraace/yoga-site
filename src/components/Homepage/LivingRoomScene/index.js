
import { FullScreen } from "./styles"; 
import TVSequence from "./TVSequence";

const LivingRoomScene = ({ progress, width, height, duration, active }) => {
    
    // coordinates and dimensions needed for draw image
    const sh = height; 
    const sw = (sh * (1920/1080)); 
    const x = (((sw-width)/2)*-1); 
    const y = 0; 

    return(
        <FullScreen>
            <TVSequence {...{ active, progress, duration, x, y, sw, sh, width, height }}/>
        </FullScreen>
    )
}

export default LivingRoomScene;