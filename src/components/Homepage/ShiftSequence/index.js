import AnimatedScene from "./Desktop/Animated";
import StaticScene from "./Desktop/Static";

const ShiftScene = ({ staticScenes, ...rest }) => {

    return(
        <> 
            {!staticScenes && <AnimatedScene {...rest} />}
            {staticScenes && <StaticScene />}
        </>
    )
}

export default ShiftScene;