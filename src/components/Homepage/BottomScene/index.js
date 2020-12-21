import StaticScene from "./Desktop/Static"; 
import AnimatedScene from "./Desktop/Animated";

const InstructorsScene = ({ staticScenes, ...rest }) => {
    return(
        <>
            {staticScenes && <StaticScene {...{staticScenes}} />}
            {!staticScenes && <AnimatedScene {...rest} />}
        </>
    )
}

export default InstructorsScene;