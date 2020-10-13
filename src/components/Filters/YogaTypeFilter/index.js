import { RadioButton, Icon, Label, Control } from './styles';
import Radio from '../../Forms/Radio';
import FlowIcon from '../../../assets/svgs/flow-icon.svg';
import FollowIcon from '../../../assets/svgs/follow-icon.svg'; 
import FiitIcon from '../../../assets/svgs/fiit-icon.svg'; 
import RestoreIcon from '../../../assets/svgs/restore-icon.svg'; 

const YogaTypeFilter = ({ label, value, selected, handleChange, ...rest }) => {
    return(
        <RadioButton className={value + (selected === value? ' selected' : '')}>
            <Icon className={value}>
                {value === 'flow' && <FlowIcon />}
                {value === 'follow' && <FollowIcon />}
                {value === 'fiit' && <FiitIcon />}
                {value === 'restore' && <RestoreIcon />}
            </Icon>
            <div>
                <Label className={value}>{label}</Label>
            </div>
            <Control>
                <Radio {...rest} {...{value}} name="yoga-type" checked={selected === value} onChange={handleChange} />
            </Control>
        </RadioButton>
    )
}

export default YogaTypeFilter;