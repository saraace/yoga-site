import PropTypes from "prop-types";
import { Radio } from './styles';

const RadioFilterOption = ({ label, value, name, selected, handleChange }) => {
    return(
        <Radio className={selected === value? 'selected' : ''}>
            <input type="radio" {...{value}} {...{name}} onChange={handleChange} checked={selected === value} />
            <span>{label}</span>
        </Radio>
    )
}

RadioFilterOption.defaultProps = {
    label: '', 
    value: '', 
    name: '', 
    selected: '',
    handleChange: () => {}
}

RadioFilterOption.propTypes = {
    label: PropTypes.string, 
    value: PropTypes.string, 
    name: PropTypes.string, 
    selected: PropTypes.string, 
    handleChange: PropTypes.func
}

export default RadioFilterOption;