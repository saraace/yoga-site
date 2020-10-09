import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'theme-ui';
import FormOptionGroup from "./styles";
import Radio from "../Radio";
import ValidationLabel from "../Validation/ValidationLabel";
import ValidationWrapper from "../Validation/ValidationWrapper";

const FormOption = ({ name, options, multiple, label, value, required, className, validate, ...rest }) => {
    return (
        <FormOptionGroup {...{className}}>
            <ValidationWrapper {...{validate}}>
                {label && <Label>{label}</Label>}
                {!multiple && options.map((option, i) => (
                    <Radio key={i} {...rest} name={name} value={option.value} label={option.displayValue} checked={option.value === value} />
                ))}
            </ValidationWrapper>
            {validate && <ValidationLabel>{validate}</ValidationLabel>}
        </FormOptionGroup>
    )
}

FormOption.defaultProps = {
    name: "", 
    options: [], 
    multiple: false, 
    label: "", 
    value: "", 
    required: false, 
    className: "",
    validate: ""
};

FormOption.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    multiple: PropTypes.bool,
    label: PropTypes.string, 
    value: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    validate: PropTypes.string, 
}

export default FormOption;