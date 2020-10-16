/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';
import Link from "next/link";
import ButtonRow, { RowItem } from "./styles";

const Buttons = () => {

    const authenticated = false;

    return (
        <ButtonRow>
            {authenticated && (
                <>
                    <RowItem>
                        <Link href="/account">
                            <NavLink>Account</NavLink>
                        </Link>
                    </RowItem>
                    <RowItem>
                        <Link href="/logout">
                            <NavLink>logout</NavLink>
                        </Link>
                    </RowItem>
                </>
            )}
            {!authenticated && (
                <>
                    <RowItem>
                        <Link href="/login">
                            <NavLink>Login</NavLink>
                        </Link>
                    </RowItem>
                    <RowItem>
                        <Link href="/sign-up">
                            <a sx={{ variant: 'buttons.primary' }}>Sign Up</a>
                        </Link>
                    </RowItem>
                </>
            )}
        </ButtonRow>
    )
  }
  
  export default Buttons;
  