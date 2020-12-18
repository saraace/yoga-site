import { motion, useTransform } from "framer-motion";

// Locations 
import LocationsScene from "../LocationsScene";
// Sign Up Form
import SignUpForm from "../SignUpForm"; 

import { Scene, ImageWrapper, LocationsContent, SignUpContent, LocationsWrapper } from "./styles";

const BottomScene = ({ scrollY, yVal, startPos, height }) => {

    const y = useTransform(scrollY, [startPos-height, startPos, startPos+height], [-200, 0, -200]);

    return(
        <Scene>
            <motion.div style={{ y }}>
                <ImageWrapper>
                    <img src="/images/homepage/sign-up/bg.png" />
                </ImageWrapper>
            </motion.div>
            <LocationsContent>
                <LocationsScene />
            </LocationsContent>
            <SignUpContent>
                <SignUpForm {...{ yVal, startPos }} />
            </SignUpContent>
        </Scene>
    )
}

export default BottomScene;