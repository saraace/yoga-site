import StaticScene from "./Desktop/Static"; 
import AnimatedScene from "./Desktop/Animated";

const CategoriesScene = ({ staticScenes, ...rest }) => {
    return(
        <>
            {staticScenes && <StaticScene />}
            {!staticScenes && <AnimatedScene {...rest} />}
        </>
    )
}

export default CategoriesScene;