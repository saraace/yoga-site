/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from "theme-ui";
import Check from "../../../assets/svgs/checkmark.svg";
import { ButtonWrapper } from "./styles";

const ReserveButton = ({ reserved, location, onClick }) => {
    return(
        <ButtonWrapper>
        {!reserved && (<Button {...{onClick}} variant="primary">Reserve Spot</Button>)}
        {reserved && (<Button {...{onClick}} variant="secondary"><Check /><span>Reserved — {location}</span></Button>)}
        </ButtonWrapper>
    )
}

export default ReserveButton;