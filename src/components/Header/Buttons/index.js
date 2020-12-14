/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';
import Link from "next/link";
import { login } from "../../../services/auth";
import { useUser } from "../../../services/hooks";
import ButtonRow, { RowItem } from "./styles";

const Buttons = () => {
    const {
      user: { isLoggedIn = false } = {},
    } = useUser() || {};
    const authenticated = isLoggedIn;

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
                        <Link href="/api/logout">
                            <NavLink>logout</NavLink>
                        </Link>
                    </RowItem>
                </>
            )}
            {!authenticated && (
                <>
                    <RowItem>
                        <NavLink onClick={() => login()}>Login</NavLink>
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
  