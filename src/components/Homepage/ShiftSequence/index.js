import { useTransform } from "framer-motion";
import ImageArray from "./images";
import ImageSequence from "../ImageSequence";

const ShiftSequence = ({ scrollY, width, height, x, y, sw, sh, }) => {

    const imageSequence = ImageArray();

    const scale = useTransform(scrollY, [0, 300], ["1", "1.1"]);

    return(
        <ImageSequence {...{ imageSequence, style: scale, scrollY, width, height, x, y, sw, sh }} />
    )
}

export default ShiftSequence;