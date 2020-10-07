import React from 'react';
import PropTypes from 'prop-types';
import FormOptionGroup from "./styles";
import Radio from "../Radio";
import Validation from "../Validation";

const FormOption = ({ name, options, multiple, label, required, className, validate, }) => {
    return (
        <FormOptionGroup {...{className}} >
            {label && <div>{label}</div>}
            {!multiple && options.map(option => (
                <label><Radio name={name} value={option.value} label={option.displayValue} /></label>
            ))}
            {validate && <Validation>{validate}</Validation>}
        </FormOptionGroup>
    )
}

FormOption.defaultProps = {
    className: '', 
    multiple: false, 
    options: []
};

FormOption.propTypes = {
    label: PropTypes.string, 
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    multiple: PropTypes.bool,
    validate: PropTypes.string, 
    className: PropTypes.string,
}

export default FormOption;