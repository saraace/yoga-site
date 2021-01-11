/** @jsx jsx */
import { jsx, NavLink } from "theme-ui";
import Link from "next/link";
// import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../services/auth";
import ButtonRow, { RowItem } from "./styles";
import LocalLogin from "../../development/LocalLogin";

// const LocalLogin = dynamic(() => import("../../development/LocalLogin"), {
//   ssr: false,
// });

const Buttons = () => {
  const { auth, code_verifier } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  return (
    <>
      <ButtonRow>
        {auth && (
          <>
            <RowItem>
              <Link href="/account">
                <NavLink>Account</NavLink>
              </Link>
            </RowItem>
            <RowItem>
              <NavLink onClick={() => dispatch({ type: "LOGOUT" })}>
                logout
              </NavLink>
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
                <a sx={{ variant: "buttons.primary" }}>Sign Up</a>
              </Link>
            </RowItem>
          </>
        )}
      </ButtonRow>
      {code_verifier && <LocalLogin {...{ code_verifier }} />}
    </>
  );
};

export default Buttons;
