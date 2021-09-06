/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import ButtonRow, { RowItem } from "./styles";
const Buttons = () => {
  return (
    <>
      <ButtonRow>
        <RowItem>
          <Link href="/sign-up">
            <a sx={{ variant: "buttons.primary" }}>Sign Up</a>
          </Link>
        </RowItem>
      </ButtonRow>
    </>
  );
};

export default Buttons;
