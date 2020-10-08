import PropTypes from "prop-types";
import { Wrapper } from "./styles";

const ValidationWrapper = ({ validate, children }) => {
    return(
        <Wrapper className={(validate? 'invalid' : 'valid') + ' wrapper'}>
            {children}
        </Wrapper>
    )
}

ValidationWrapper.defaultProps = {
    validate: ""
};

ValidationWrapper.propTypes = {
    validate: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default ValidationWrapper;