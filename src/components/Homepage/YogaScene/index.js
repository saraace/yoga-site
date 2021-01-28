import Icon from "../../../assets/svgs/yoga-icon.svg";
import { Wrapper, CategoriesWrapper, SingleCategoryWrapper } from "./styles";

/* COMPONENTS */ 
import Categories from "../Categories";
import SingleCategory from "../SingleCategory";

const YogaScene = ({ isMobile, progress, startPos, width, height, x, y, sw, sh, ...rest }) => {

    const posterSrc = "/images/homepage/yoga/bg-yoga.png"
    const mobilePosterSrc = "/images/homepage/yoga/bg-mobile.jpg";
    const videoSrc = "/images/homepage/yoga/bg-yoga.mp4";
    const heading = "Yoga"; 
    const description = "Brought to you by the creators of Hot Fusion Flow™, our total-body yoga classes provide room for creativity while remaining rooted in traditional techniques and postures.";
    const listItems = [
        "A strong musical component provides an organic catalyst for transitions and encourages you to focus on your breathing.", 
        "Flow and follow along to a vinyasa-based practice that will help to open up your body, your mind, and your spirit."
    ]

    return(
        <Wrapper>  
            <CategoriesWrapper>
                <Categories {...{ isMobile, duration: 2500, progress, startPos, width, height, x, y, sw, sh }} {...rest} />
            </CategoriesWrapper>
            {progress > 0.625 &&
            <SingleCategoryWrapper>
                <SingleCategory icon={<Icon />} {...{ isMobile, progress, posterSrc: (isMobile? mobilePosterSrc : posterSrc), videoSrc, heading, description, listItems, height, startPos: startPos+2500, duration: 1500, gradient: false }} {...rest} /> 
            </SingleCategoryWrapper>
            }
        </Wrapper>
    )
}

YogaScene.defaultProps = {
    startPos: 0
}

export default YogaScene;