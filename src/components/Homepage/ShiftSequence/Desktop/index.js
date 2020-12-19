import AnimatedScene from "./Animated";
import StaticScene from "./Static";

const DesktopScene = ({ staticScenes, ...rest }) => {

    return(
        <> 
            {!staticScenes && <AnimatedScene {...rest} />}
            {staticScenes && <StaticScene />}
        </>
    )
}

export default DesktopScene;