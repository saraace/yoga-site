import { useState } from "react";
import { Button } from "theme-ui";
import Lightbox from "../FullScreenLightbox";
import StepIndicator from "./StepIndicator";
import Step1 from "./Step1"; 
import Step2 from "./Step2"; 
import Step3 from "./Step3";

const SignUpLightbox = () => {

    const [ step, setStep ] = useState(0);

    const next = () => {
        setStep(step => step++);
    }

    const prev = () => {
        setStep(step => step--);
    }

    return(
        <Lightbox>
            <CloseButton />
            <BackButton onClick={prev} />
            {step === 0 && 
                <GetStarted>
                    <h2>Get started with a Yoga Joint account!</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco.</p>
                    <Button onClick={next}>Get Started</Button>
                </GetStarted>
            }
            <Steps>
                <StepIndicator {...{step}} />
                {step === 1 && 
                    <Step1 onNext={next}/>
                }
                {step === 2 && 
                    <Step2 onPrev={prev} onNext={next}/>
                }
                {step === 3 && 
                    <Step3 onPrev={prev}/>
                }
            </Steps>
        </Lightbox>

    )
}

export default SignUpLightbox;