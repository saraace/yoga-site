import PropTypes from "prop-types";
import { LabelContainer, Label } from "./styles";

const ValidationLabel = ({ children }) => {
    return(
        <LabelContainer 
            initial={{ opacity: 0, y: '-20px', height: '0px' }}
            animate={{ opacity: 1, y: 0, height: 'auto'  }}
            exit={{ opacity: 0, y: '20px', height: '0px' }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
        >
            <Label>{children}</Label>
        </LabelContainer>
    )
}

ValidationLabel.PropTypes = {
    children: PropTypes.node.isRequired
}

export default ValidationLabel;