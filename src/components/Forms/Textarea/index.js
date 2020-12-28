import PropTypes from 'prop-types';
import { Input, Label, Textarea } from 'theme-ui';
import { AnimatePresence } from 'framer-motion';
import FormInputWrapper from "./styles";
import ValidationLabel from "../Validation/ValidationLabel";

const FormTextArea = ({ label, required, className, validate, value, ...rest }) => {
    return(
        <FormInputWrapper className={validate? 'invalid' : 'valid'}>
            {label && <Label variant={className? className+'-label' : 'label'}>{label}{required ? ' *' : ''}</Label>}
            <Textarea {...rest} variant={className? className+'-textarea' : 'textarea'} {...{value}} />
            <AnimatePresence>
                {validate && <ValidationLabel>{validate}</ValidationLabel>}
            </AnimatePresence>
        </FormInputWrapper>
    )
}

FormTextArea.defaultProps = {
    label: "", 
    required: false, 
    className: "",
    validate: "", 
    value: ""
};

FormTextArea.propTypes = {
    label: PropTypes.string, 
    required: PropTypes.bool,
    className: PropTypes.string,
    validate: PropTypes.string, 
    value: PropTypes.string
}

export default FormTextArea;