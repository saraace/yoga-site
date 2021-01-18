import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SignUpLightbox from "../../SignUpLightbox";
//import UpdatePaymentLightbox from "../../UpdatePaymentLightbox"
import { VideoWrapper, PlayButton } from "./styles";

const Video = () => {

    const [ signUpLightbox, setSignUpLightbox ] = useState(false);

    return(
        <>
            <VideoWrapper>
                <PlayButton onClick={() => setSignUpLightbox(true)} />
            </VideoWrapper>
            <AnimatePresence>{signUpLightbox && <SignUpLightbox onToggle={() => setSignUpLightbox(signUpLightbox => !signUpLightbox)} />}</AnimatePresence>
        </>
    )
}

export default Video;