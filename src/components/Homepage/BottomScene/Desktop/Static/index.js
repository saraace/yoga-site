// Locations 
import LocationsScene from "../../../LocationsScene";
// Sign Up Form
import SignUpForm from "../../../SignUpForm"; 

import { Scene, ImageWrapper, LocationsContent, SignUpContent } from "./styles";

const BottomScene = ({ staticScenes, isMobile }) => {
    return(
        <Scene>
            <ImageWrapper>
                <img src="/images/homepage/sign-up/bg.png" />
            </ImageWrapper>
            <LocationsContent>
                <LocationsScene {...{ isMobile }} />
            </LocationsContent>
            <SignUpContent>
                <SignUpForm {...{ staticScenes }} />
            </SignUpContent>
        </Scene>
    )
}

export default BottomScene;