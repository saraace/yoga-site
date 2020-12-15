import SingleCategory from "../SingleCategory";
import Icon from "../../../assets/svgs/yoga-icon.svg";

const YogaScene = ({ scrollY, progress, duration, startPos, nextStartPos, offsetStyles, height }) => {

    const videoSrc = "/images/homepage/scene-09-yoga/bg-yoga.mp4";
    const heading = "Yoga"; 
    const description = "Brought to you by the creators of Hot Fusion Flow™, our total-body yoga classes provide room for creativity while remaining rooted in traditional techniques and postures.";
    const listItems = [
        "A strong musical component provides an organic catalyst for transitions and encourages you to focus on your breathing.", 
        "Flow and follow along to a vinyasa-based practice that will help to open up your body, your mind, and your spirit."
    ]

    return(
        <SingleCategory icon={<Icon />} {...{ scrollY, progress, duration, startPos, nextStartPos, offsetStyles, height, videoSrc, heading, description, listItems }} /> 
    )
}

YogaScene.defaultProps = {
    startPos: 0
}

export default YogaScene;