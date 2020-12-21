import StaticScene from "./Desktop/Static"; 
import AnimatedScene from "./Desktop/Animated";

const SingleCategoryScene = ({ staticScenes, ...rest }) => {
    return(
        <>
            {staticScenes && <StaticScene {...rest} />}
            {!staticScenes && <AnimatedScene {...rest} />}
        </>
    )
}

export default SingleCategoryScene;