// Locations 
import LocationsScene from "../../../LocationsScene";
// Sign Up Form
import SignUpForm from "../../../SignUpForm"; 

import { Scene, LocationsContent, SignUpContent } from "./styles";

const BottomScene = ({ staticScenes }) => {
    return(
        <Scene>
            <LocationsContent>
                <LocationsScene />
            </LocationsContent>
            <SignUpContent>
                <SignUpForm {...{ staticScenes }} />
            </SignUpContent>
        </Scene>
    )
}

export default BottomScene;