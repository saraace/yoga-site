import { Button } from "theme-ui";
import { Success } from "./styles";

const SuccessMessage = ({ onStart }) => {
    return(
        <Success>
            <h2>Congrats!</h2>
            <p>We have received your payment and have created your account. Please check your email for login instructions.</p>
            <Button onClick={onStart} variant="primary-block">Start Now</Button>
        </Success>
    )
}

export default SuccessMessage;