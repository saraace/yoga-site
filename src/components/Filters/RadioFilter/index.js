import { Radio } from './styles';

const RadioFilter = ({ label, value, name, selected, handleChange }) => {
    return(
        <Radio className={selected === value? 'selected' : ''}>
            <input type="radio" {...{value}} {...{name}} onChange={handleChange} />
            <span>{label}</span>
        </Radio>
    )
}

export default RadioFilter;