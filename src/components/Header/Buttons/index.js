/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from "next/link";
import ButtonRow, { RowItem } from "./styles";
import { NavLink } from "../Navigation/styles";

const Buttons = () => {
    return (
        <ButtonRow>
            <RowItem>
                <NavLink href="#">Login</NavLink>
            </RowItem>
            <RowItem>
                <Link href="/sign-up">
                    <a sx={{ variant: 'buttons.primary-block' }}>Sign Up</a>
                </Link>
            </RowItem>
        </ButtonRow>
    )
  }
  
  export default Buttons;
  