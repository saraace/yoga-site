/* COMPONENTS */
import DesktopScene from "./Desktop";
import MobileScene from "./Mobile";
import StaticScene from "./Static"; 

const SingleCategoryScene = ({ staticScenes, isMobile, ...rest }) => {
    return(
        <>
            {!staticScenes && !isMobile && <DesktopScene {...rest} />}
            {!staticScenes && isMobile && <MobileScene {...rest} />}
            {staticScenes && <StaticScene {...rest} />}
        </>
    )
}

export default SingleCategoryScene;