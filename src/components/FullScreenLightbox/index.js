import { Lightbox } from "./styles";

const FullScreenLightbox = ({ close, reset, onClose, onReset, children }) => {
    return(
        <Lightbox 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <LightboxControls>
                {close && <CloseButton onClick={onClose}>Close</CloseButton>}
                {reset && <ResetButton onClick={onReset}>Reset</ResetButton>}
            </LightboxControls>
            {children}
        </Lightbox>
    )
}

FullScreenLightbox.defaultProps = {
    close: true, 
    reset: false
}

export default FullScreenLightbox;