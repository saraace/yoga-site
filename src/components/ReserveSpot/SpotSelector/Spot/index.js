import { SpotOption, Mat, Label } from "./styles";

const Spot = ({ name, value, label, available, selected, onChange }) => {
    return(
        <SpotOption className={selected? 'selected' : (available? 'available' : 'taken')}>
            <input type="radio" {...{ name, value: label, disabled: !available, onChange }} checked={value === label} />
            <Mat className={"mat " + (selected? 'selected' : (available? 'available' : 'taken'))}/>
            <Label>{label}</Label>
        </SpotOption>
    )
}

export default Spot;