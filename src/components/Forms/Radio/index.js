import React from 'react';
import PropTypes from 'prop-types';
import FormRadioWrapper, { RadioWrapper, RadioControl, LabelSpan } from "./styles";
import Validation from "../Validation";

const FormRadio = ({ label, required, className, value, ...rest }) => {
    return (
        <RadioWrapper>
            {label && <LabelSpan>{label}</LabelSpan>}
            <input type="radio" {...rest} {...{value}} />
            <RadioControl />
        </RadioWrapper>
    )
}

FormRadio.defaultProps = {
    className: ''
};

FormRadio.propTypes = {
    label: PropTypes.string, 
    required: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string
}

export default FormRadio;