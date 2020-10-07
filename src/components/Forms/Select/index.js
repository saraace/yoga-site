import React  from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx, Select, Label } from 'theme-ui';
import FormSelectWrapper, { SelectWrapper } from "./styles";
import Arrow from "../../../svgs/chevron-down.svg";
import LocationMarker from "../../../svgs/location-pin.svg";
import Validation from "../Validation";

const FormSelect = ({ value, className, options = [], label, validate, locationIcon, ...rest }) => (
    <FormSelectWrapper> 
        {label && <Label>{label}</Label>}
        <SelectWrapper>
            {locationIcon && <LocationMarker className="marker" />}
            <Select {...rest} {...{value}} className={locationIcon? 'icon-included' : ''}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.displayValue ? option.displayValue.replace(/_/g, " ") : ""}
                </option>
            ))}
            </Select>
            <Arrow className="arrow" />
        </SelectWrapper>
        {validate && <Validation>{validate}</Validation>}
    </FormSelectWrapper>
);

FormSelect.defaultProps = {
  className: "",
  value: "", 
  locationIcon: false
};

FormSelect.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string, 
    validate: PropTypes.string, 
    locationIcon: PropTypes.bool,
};

export default FormSelect;
