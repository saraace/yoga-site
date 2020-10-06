/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import ButtonRow, { RowItem } from "./styles";
import { NavLink } from "../Navigation/styles";

const Buttons = () => {
    return (
        <ButtonRow>
            <RowItem>
                <NavLink href="#">Login</NavLink>
            </RowItem>
            <RowItem>
                <Button variant="primary">Sign Up</Button>
            </RowItem>
        </ButtonRow>
    )
  }
  
  export default Buttons;
  