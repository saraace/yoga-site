import { Indicator, LargeCircle, SmallCircle, Mouse } from "./styles"; 
import DownArrow from "../../../assets/svgs/down.svg"

const ScrollIndicator = ({ isMobile, height }) => {

    return(
        <Indicator style={{ top: height-(isMobile? 100 : 61) }}>
            <LargeCircle />
            <SmallCircle />
            {!isMobile ? <Mouse /> : <DownArrow />}
        </Indicator>
    )
}

export default ScrollIndicator;