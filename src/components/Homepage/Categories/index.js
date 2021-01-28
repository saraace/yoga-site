import StaticScene from "./Static"; 
import AnimatedScene from "./Desktop";
import MobileScene from "./Mobile";

const CategoriesScene = ({ staticScenes, isMobile, ...rest }) => {
    return(
        <>
            {staticScenes && <StaticScene />}
            {!staticScenes && !isMobile && <AnimatedScene {...rest} />}
            {!staticScenes && isMobile && <MobileScene {...rest} />}
        </>
    )
}

export default CategoriesScene;