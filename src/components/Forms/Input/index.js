import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, Input, Label } from 'theme-ui';
import FormInputWrapper from "./styles";
import Validation from "../Validation";

const FormInput = ({ label, required, className, validate, value, ...rest }) => {
    return(
        <FormInputWrapper>
            {label && <Label>{label}</Label>}
            <Input {...rest} {...{value}} />
            {validate && <Validation>{validate}</Validation>}
        </FormInputWrapper>
    )
}

FormInput.defaultProps = {
    className: '', 
    type: 'text'
};

FormInput.propTypes = {
    label: PropTypes.string, 
    required: PropTypes.bool,
    className: PropTypes.string,
    validate: PropTypes.string, 
    value: PropTypes.string
}

export default FormInput;