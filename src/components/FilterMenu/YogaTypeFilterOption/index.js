import PropTypes from "prop-types";
import { RadioButton, Icon, Label, Control } from './styles';
import Radio from '../../Forms/Radio';
import FollowIcon from '../../../assets/svgs/yoga-icon.svg'; 
import FiitIcon from '../../../assets/svgs/fiit-icon.svg'; 
import RestoreIcon from '../../../assets/svgs/restore-icon.svg'; 

const YogaTypeFilterOption = ({ label, value, name, selected, handleChange, ...rest }) => {
    return(
        <RadioButton className={value + (selected === value? ' selected' : '')}>
            <Icon className={value}>
                {value === 'follow' && <FollowIcon />}
                {value === 'fiit' && <FiitIcon />}
                {value === 'restore' && <RestoreIcon />}
            </Icon>
            <div>
                <Label className={value}>{label}</Label>
            </div>
            <Control>
                <Radio {...rest} {...{value}} {...{name}} checked={selected === value} onChange={handleChange} />
            </Control>
        </RadioButton>
    )
}

YogaTypeFilterOption.defaultProps = {
    label: '', 
    value: '', 
    name: 'yogaType', 
    selected: '',
    handleChange: () => {}
}

YogaTypeFilterOption.propTypes = {
    label: PropTypes.string, 
    value: PropTypes.string, 
    name: PropTypes.string, 
    selected: PropTypes.string, 
    handleChange: PropTypes.func
}

export default YogaTypeFilterOption;