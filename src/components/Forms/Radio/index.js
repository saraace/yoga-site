import React from 'react';
import PropTypes from 'prop-types';
import RadioWrapper, { RadioControl, Label } from "./styles";

const FormRadio = ({ label, required, className, value, ...rest }) => {
    return (
        <RadioWrapper>
            {label && <Label>{label}</Label>}
            <input type="radio" {...rest} {...{value}} />
            <RadioControl />
        </RadioWrapper>
    )
}

FormRadio.defaultProps = {
    label: "", 
    required: false, 
    className: "", 
    value: ""
};

FormRadio.propTypes = {
    label: PropTypes.string, 
    required: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string
}

export default FormRadio;