import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "theme-ui";
import StepHeader from "../StepHeader";
import OptionGroup from "../../Forms/OptionGroup";
import Plans from "../../SignUp/Plans";
import { RadioGroup, PlanGroup } from "./styles";

const Step2 = ({ onNext }) => {

    const monthlyOps = [
        {
            title: "Free 7-Day Trial", 
            value: "trial",
            price: "Free", 
            best: false,
        }, 
        {
            title: "Mobile Only",
            value: "mobile-only",
            price: "$7.99/Mo", 
            best: false,
            features: [
                "Access to all on-demand classes", 
                "Access to live web classes"
            ]
        }, 
        {
            title: "1 Studio",
            value: "studio",
            price: "$15.99/Mo",
            best: true,
            features: [
                "Access to all on-demand classes", 
                "Access to live web classes", 
                "Join our classes in one of our physical locations"
            ]
        }, 
        {
            title: "All-In",
            value: "all-in",
            price: "$32.99/Mo",
            best: false,
            features: [
                "Access to all on-demand classes", 
                "Access to live web classes", 
                "Join our classes at any of our physical locations"
            ]
        }
    ];

    const freqOps = [
        { value: 'monthly', displayValue: 'Monthly' }, 
        { value: 'yearly', displayValue: 'Yearly' }
    ];

    const step2Submit = () => {
        console.log('Step 2 Submit');
        onNext();
    }

    const step2Schema = Yup.object().shape({
        frequency: Yup.mixed().oneOf(['monthly', 'yearly'], "Required field").required("Required field"),
        plan: Yup.mixed().required("Required field"),
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            frequency: "",
            plan: ""
        },
        validationSchema: step2Schema,
        onSubmit: step2Submit
    })

    return(
        <div>
            <StepHeader total="3" current="2" heading="Choose your plan" />
            <form onSubmit={handleSubmit}>
                <RadioGroup>
                    <OptionGroup options={freqOps} className="freq" name="frequency" value={values.frequency} onChange={handleChange} validate={touched.frequency && errors.frequency} />
                </RadioGroup>
                <PlanGroup>
                    <Plans plans={monthlyOps} name="plan" value={values.plan} onChange={handleChange} validate={touched.plan && errors.plan} />
                </PlanGroup>
                <Button type="submit" variant="primary-block">Continue</Button>
            </form>
        </div>
    )
}

export default Step2;