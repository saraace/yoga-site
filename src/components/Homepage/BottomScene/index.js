import StaticScene from "./Desktop/Static"; 
import AnimatedScene from "./Desktop/Animated";

const InstructorsScene = ({ staticScenes, isMobile, ...rest }) => {
    return(
        <>
            {staticScenes && <StaticScene {...{ staticScenes, isMobile }} />}
            {!staticScenes && <AnimatedScene {...rest} />}
        </>
    )
}

export default InstructorsScene;