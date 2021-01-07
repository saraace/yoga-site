import Radio from "../../../Forms/Radio";
import { SpotOption, Mat, Label } from "./styles";

const Spot = ({ name, value, label, available, selected }) => {
    return(
        <SpotOption>
            <input type="radio" {...{ name, value: label, disabled: !available }} />
            <Mat className={"mat " + (selected? 'selected' : (available? 'available' : 'taken'))}/>
            <Label>{label}</Label>
        </SpotOption>
    )
}

export default Spot;