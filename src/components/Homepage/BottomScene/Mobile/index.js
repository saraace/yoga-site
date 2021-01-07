import { motion, useTransform } from "framer-motion";

// Locations 
import LocationsScene from "../../LocationsScene";
// Sign Up Form
import SignUpForm from "../../SignUpForm"; 

import { Scene, ImageWrapper, LocationsContent, SignUpContent } from "./styles";

const BottomScene = ({ staticScenes, isMobile, scrollY, yVal, startPos, height }) => {

    const y = useTransform(scrollY, [startPos-height, startPos+(height*2)], [-200, 600]);

    return(
        <Scene>
            <motion.div style={{ y }}>
                <ImageWrapper>
                    <img src="/images/homepage/sign-up/bg.png" />
                </ImageWrapper>
            </motion.div>
            <LocationsContent>
                <LocationsScene {...{ staticScenes, isMobile }} />
            </LocationsContent>
            <SignUpContent>
                <SignUpForm {...{ yVal, startPos }} />
            </SignUpContent>
        </Scene>
    )
}

export default BottomScene;