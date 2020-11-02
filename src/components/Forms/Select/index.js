import PropTypes from "prop-types";
import { Select, Label } from 'theme-ui';
import { AnimatePresence } from 'framer-motion';
import FormSelectWrapper, { SelectWrapper } from "./styles";
import Arrow from "../../../assets/svgs/chevron-down.svg";
import LocationMarker from "../../../assets/svgs/location-pin.svg";
import ValidationLabel from "../Validation/ValidationLabel";

const FormSelect = ({ value, className, options, label, required, validate, locationIcon, disabled, ...rest }) => {
    return (
        <FormSelectWrapper className={validate? 'invalid' : 'valid'}> 
            {label && <Label variant={className? className+'-label' : 'label'}>{label}{required ? ' *' : ''}</Label>}
            <SelectWrapper className={className}>
                {locationIcon && <LocationMarker className="marker" />}
                <Select {...rest} {...{ value, disabled }} variant={className? className+'-select' : 'select'} className={locationIcon? 'icon-included' : ''}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue ? option.displayValue.replace(/_/g, " ") : ""}
                    </option>
                ))}
                </Select>
                <Arrow className={"arrow" + (disabled? " disabled" : "")} />
            </SelectWrapper>
            <AnimatePresence>
                {validate && <ValidationLabel>{validate}</ValidationLabel>}
            </AnimatePresence>
        </FormSelectWrapper>
    )
}

FormSelect.defaultProps = {
    value: "", 
    className: "",
    options: [],
    label: "", 
    required: false,
    validate: "",
    locationIcon: false
};

FormSelect.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string, 
    required: PropTypes.bool,
    validate: PropTypes.string, 
    locationIcon: PropTypes.bool,
};

export default FormSelect;
