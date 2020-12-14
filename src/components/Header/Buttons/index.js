/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../services/auth";
import ButtonRow, { RowItem } from "./styles";

const Buttons = () => {
    const { auth } = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();
    return (
        <ButtonRow>
            {auth && (
                <>
                    <RowItem>
                        <Link href="/account">
                            <NavLink>Account</NavLink>
                        </Link>
                    </RowItem>
                    <RowItem>
                        <NavLink onClick={() => dispatch({ type: "LOGOUT" })}>logout</NavLink>
                    </RowItem>
                </>
            )}
            {!auth && (
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
  