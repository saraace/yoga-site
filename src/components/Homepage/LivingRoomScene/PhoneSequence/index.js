import AnimatedScene from "./Desktop/Animated";
import StaticScene from "./Desktop/Static";

const DesktopScene = ({ staticScenes, ...rest }) => {

    return(
        <> 
            {!staticScenes && <AnimatedScene {...rest} />}
            {staticScenes && <StaticScene />}
        </>
    )
}

export default DesktopScene;