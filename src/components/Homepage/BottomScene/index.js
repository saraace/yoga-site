import StaticScene from "./Static"; 
import DesktopScene from "./Desktop";
import MobileScene from "./Mobile";

const InstructorsScene = ({ staticScenes, isMobile, ...rest }) => {
    return(
        <>
            {!staticScenes && !isMobile && <DesktopScene {...{ staticScenes, isMobile }} {...rest} />}
            {!staticScenes && isMobile && <MobileScene {...{ staticScenes, isMobile }} {...rest} />}
            {staticScenes && <StaticScene {...{ staticScenes, isMobile }} />}
        </>
    )
}

export default InstructorsScene;