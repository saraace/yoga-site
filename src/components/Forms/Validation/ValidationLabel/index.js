import PropTypes from "prop-types";
import { LabelContainer, Label } from "./styles";

const ValidationLabel = ({ children }) => {
    return(
        <LabelContainer>
            <Label>{children}</Label>
        </LabelContainer>
    )
}

ValidationLabel.PropTypes = {
    children: PropTypes.node.isRequired
}

export default ValidationLabel;