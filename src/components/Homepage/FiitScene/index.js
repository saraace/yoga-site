import SingleCategory from "../SingleCategory";
import Icon from "../../../assets/svgs/fiit-icon.svg";

const FiitScene = ({ isMobile, ...rest }) => {

    const posterSrc = "/images/homepage/fiit/bg-fiit.png"
    const mobilePosterSrc = "/images/homepage/fiit/bg-mobile.jpg";
    const videoSrc = "/images/homepage/fiit/bg-fiit.mp4";
    const heading = "FIIT"; 
    const description = "High-intensity cardio meets strength-training in FIIT, our high-octane series of classes designed to torch calories while instilling greater discipline, confidence, and coordination.";
    const listItems = [
        "Test the limits of your endurance and see just how far you can push yourself in this high-intensity workout.", 
        "Increase your endurance without straining your joints in this low to medium-impact, full body workout."
    ]

    return(
        <SingleCategory icon={<Icon />} {...{ isMobile, posterSrc: (isMobile? mobilePosterSrc : posterSrc), videoSrc, heading, description, listItems }} {...rest} /> 
    )
}

FiitScene.defaultProps = {
    startPos: 0
}

export default FiitScene;