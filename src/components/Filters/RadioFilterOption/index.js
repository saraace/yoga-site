import { Radio } from './styles';

const RadioFilterOption = ({ label, value, name, selected, handleChange }) => {
    return(
        <Radio className={selected === value? 'selected' : ''}>
            <input type="radio" {...{value}} {...{name}} onChange={handleChange} checked={selected === value} />
            <span>{label}</span>
        </Radio>
    )
}

export default RadioFilterOption;