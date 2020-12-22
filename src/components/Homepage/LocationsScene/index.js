import DesktopScene from "./Desktop";

const LocationsScene = ({ staticScenes, isMobile, ...rest }) => {
    return(
        <DesktopScene {...{ isMobile }} {...rest} />
    )
}

export default LocationsScene;