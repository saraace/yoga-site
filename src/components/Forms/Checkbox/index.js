import React from 'react';
import PropTypes from 'prop-types';
import CheckboxWrapper, { CheckboxControl, Label } from "./styles";

const FormCheckbox = ({ label, required, className, value, ...rest }) => {
    return (
        <CheckboxWrapper>
            {label && <Label>{label}</Label>}
            <input type="checkbox" {...rest} {...{value}} />
            <CheckboxControl />
        </CheckboxWrapper>
    )
}

FormCheckbox.defaultProps = {
    label: "", 
    required: false, 
    className: "", 
    value: ""
};

FormCheckbox.propTypes = {
    label: PropTypes.string, 
    required: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string
}

export default FormCheckbox;