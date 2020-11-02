import PropTypes from 'prop-types';
import { Input, Label } from 'theme-ui';
import { AnimatePresence } from 'framer-motion';
import FormInputWrapper from "./styles";
import ValidationLabel from "../Validation/ValidationLabel";

const FormInput = ({ label, required, className, validate, value, ...rest }) => {
    return(
        <FormInputWrapper className={validate? 'invalid' : 'valid'}>
            {label && <Label variant={className? className+'-label' : 'label'}>{label}{required ? ' *' : ''}</Label>}
            <Input {...rest} variant={className? className+'-input' : 'input'} {...{value}} />
            <AnimatePresence>
                {validate && <ValidationLabel>{validate}</ValidationLabel>}
            </AnimatePresence>
        </FormInputWrapper>
    )
}

FormInput.defaultProps = {
    label: "", 
    required: false, 
    className: "",
    validate: "", 
    value: ""
};

FormInput.propTypes = {
    label: PropTypes.string, 
    required: PropTypes.bool,
    className: PropTypes.string,
    validate: PropTypes.string, 
    value: PropTypes.string
}

export default FormInput;