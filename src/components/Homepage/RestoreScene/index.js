import SingleCategory from "../SingleCategory";
import Icon from "../../../assets/svgs/restore-icon.svg";

const RestoreScene = ({ scrollY, progress, duration, startPos, nextStartPos, offsetStyles, height }) => {
    
    const posterSrc = "/images/homepage/restore/bg-restore.png";
    const videoSrc = "/images/homepage/restore/bg-restore.mp4";
    const heading = "Restore"; 
    const description = "Inspired by ancient yoga and meditation practices, our restore classes combine traditional meditation techniques with restorative postures that encourage total relaxation for both mind and body.";
    const listItems = [
        "A moving meditation for physical recovery, restore will help melt away tension and calm your mind.", 
        "Allow your body to revive itself with this gentle approach to a guided, seated meditation routine."
    ]

    return(
        <SingleCategory icon={<Icon />} {...{ scrollY, progress, duration, startPos, nextStartPos, offsetStyles, height, posterSrc, videoSrc, heading, description, listItems }} /> 
    )
}

RestoreScene.defaultProps = {
    startPos: 0
}

export default RestoreScene;