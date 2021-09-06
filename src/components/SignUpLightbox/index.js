import { useState, useEffect } from "react";
import { Button, Container } from "theme-ui";
import Lightbox from "../FullScreenLightbox";
import StepIndicator from "./StepIndicator";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import SuccessMessage from "./SuccessMessage";
import { BackButton, GetStarted, Steps } from "./styles";
import LeftArrow from "../../assets/svgs/back-button.svg";

const SignUpLightbox = ({ onToggle }) => {
  const [step, setStep] = useState(0);

  const next = () => {
    setStep((step) => step + 1);
  };

  const prev = () => {
    setStep((step) => step - 1);
  };

  return (
    <Lightbox onClose={onToggle}>
      <Container variant="small">
        {step > 0 && (
          <BackButton onClick={prev}>
            <LeftArrow />
          </BackButton>
        )}
        {step === 0 && (
          <GetStarted>
            <h2>Get started with a Yoga account!</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco.
            </p>
            <Button onClick={next}>Get Started</Button>
          </GetStarted>
        )}
        {step >= 1 && (
          <Steps>
            <StepIndicator {...{ step }} />
            {step === 1 && <Step1 onNext={next} />}
            {step === 2 && <Step2 onPrev={prev} onNext={next} />}
            {step === 3 && <Step3 onPrev={prev} onNext={next} />}
          </Steps>
        )}
        {step >= 4 && <SuccessMessage onStart={onToggle} />}
      </Container>
    </Lightbox>
  );
};

export default SignUpLightbox;
