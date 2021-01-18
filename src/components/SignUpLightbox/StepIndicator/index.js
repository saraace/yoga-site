import { Steps, Step } from "./styles"; 

const StepIndicator = ({ step }) => {
    return(
        <Steps>
            <Step className={step >= 1? 'on' : ''} />
            <Step className={step >= 2? 'on' : ''} />
            <Step className={step >= 3? 'on' : ''} />
        </Steps>
    )
}

export default StepIndicator;