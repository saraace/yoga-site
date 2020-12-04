import DownArrow from "../../../assets/svgs/down.svg";
import { LargeCircle, SmallCircle } from "./styles"; 

const ScrollIndicator = () => {
    return(
        <LargeCircle>
            <SmallCircle>
                <DownArrow />
            </SmallCircle>
        </LargeCircle>
    )
}

export default ScrollIndicator;