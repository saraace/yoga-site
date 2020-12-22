/* COMPONENTS */
import DesktopScene from "./Desktop";
import StaticScene from "./Static"; 

const SingleCategoryScene = ({ staticScenes, isMobile, ...rest }) => {
    return(
        <>
            {!staticScenes && (
                <> 
                    {!isMobile && <DesktopScene {...rest} />}
                </>
            )}
            {staticScenes && <StaticScene {...rest} />}
        </>
    )
}

export default SingleCategoryScene;