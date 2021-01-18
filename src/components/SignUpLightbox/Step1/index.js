import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "theme-ui";
import StepHeader from "../StepHeader";
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import PasswordRequirements from "../../Forms/PasswordRequirements";
import { passwordRequirements } from "../../../services/validation";

const Step1 = ({ onNext }) => {

    const locationOps = [
        {
            value: 0,
            displayValue: 'Select a gym location'
        },
        {
            value: 1,
            displayValue: 'Fort Lauderdale'
        },
        {
            value: 2,
            displayValue: 'Miami'
        }
    ];

    const step1Submit = () => {
        console.log('Step 1 Submit');
        onNext();
    };

    const step1Schema = Yup.object().shape({
        email: Yup.string().email("Please enter a valid email").required("Required field"), 
        password: passwordRequirements.required("Required field"),
        confirmPassword: Yup.string().required("Required field"), 
        location: Yup.mixed().notOneOf([0, '0'], "Required field").required("Required field")
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "", 
            password: "", 
            confirmPassword: "",
            location: ""
        },
        validationSchema: step1Schema,
        onSubmit: step1Submit
    }); 

    return(
        <div>
            <StepHeader total="3" current="1" heading="Account Information"></StepHeader>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Email" name="email" value={values.email} onChange={handleChange} validate={touched.email && errors.email} />
                <PasswordRequirements password={values.password} confirm={values.confirmPassword} checkMatch={true}>
                    <Input placeholder="Password" type="password" name="password" value={values.password} onChange={handleChange} validate={touched.password && errors.password} />
                    <Input placeholder="Confirm Password" type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} validate={touched.confirmPassword && errors.confirmPassword} />
                </PasswordRequirements>
                <Select locationIcon={true} options={locationOps} name="location" value={values.location} onChange={handleChange} validate={touched.location && errors.location} />
                <Button type="submit" variant="primary-block">Continue</Button>
            </form>
        </div>
    )
}

export default Step1;