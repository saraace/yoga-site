import Image from "next/image";
import { Button } from "theme-ui";
import { Success } from "./styles";

const SuccessMessage = ({ onStart }) => {
    return(
        <Success>
            <img src="/images/sign-up/checkmark.png" />
            <h2>Submitted Successfully!</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco.</p>
            <Button onClick={onStart} variant="primary-block">Start Now</Button>
        </Success>
    )
}

export default SuccessMessage;