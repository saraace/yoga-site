import AnimatedScene from "./Animated";
import StaticScene from "./Static";

const ShiftScene = ({ staticScenes, ...rest }) => {

    return(
        <> 
            {!staticScenes && <AnimatedScene {...rest} />}
            {staticScenes && <StaticScene />}
        </>
    )
}

export default ShiftScene;