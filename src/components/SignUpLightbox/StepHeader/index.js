import { Total, Heading } from "./styles";

const StepHeader = ({ total, current, heading }) => {
    return(
        <div>
            <Total>Step {current} of {total}</Total>
            <Heading>{heading}</Heading>
        </div>
    )
}

export default StepHeader;