import { Container, Flex, Button } from 'theme-ui';
import { useFormik } from "formik";
import * as Yup from "yup";
import SignUpPage, { SignUpForm, PlanOptions, RadioGroup, FormFields, ExpDate, CVC, Terms } from "./styles"
import Select from "../Forms/Select";
import Input from "../Forms/Input";
import OptionGroup from "../Forms/OptionGroup";
import Plans from "./Plans";
import PasswordRequirements from "../Forms/PasswordRequirements";
import { passwordRequirements } from "../../services/validation";

const SignUp = () => {

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

    const signUp = () => {
        console.log('Sign Up!');
    }

    const signupSchema = Yup.object().shape({
        frequency: Yup.mixed().oneOf(['monthly', 'yearly'], "Required field").required("Required field"),
        plan: Yup.mixed().required("Required field"),
        location: Yup.mixed().notOneOf([0, '0'], "Required field").required("Required field"),
        email: Yup.string().email("Please enter a valid email").required("Required field"), 
        password: passwordRequirements.required("Required field"),
        confirmPassword: Yup.string().required("Required field"), 
        nameOnCard: Yup.string().required("Required field"), 
        cardNumber: Yup.string().required("Required field"), 
        expDate: Yup.string().required("Required field"), 
        cvc: Yup.string().required("Required field")
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            frequency: "",
            plan: "",
            location: "",
            email: "", 
            password: "", 
            confirmPassword: "",
            nameOnCard: "", 
            cardNumber: "", 
            expDate: "", 
            cvc: ""
        },
        validationSchema: signupSchema,
        onSubmit: signUp
    })
    
    return(
        <SignUpPage>
            <Container>
                <h1>Get started with a Yoga Joint account!</h1>
                <SignUpForm onSubmit={handleSubmit}>
                    <PlanOptions>
                        <RadioGroup>
                            <OptionGroup options={freqOps} className="freq" name="frequency" value={values.frequency} onChange={handleChange} validate={touched.frequency && errors.frequency} />
                        </RadioGroup>
                        <Plans plans={monthlyOps} name="plan" value={values.plan} onChange={handleChange} validate={touched.plan && errors.plan} />
                    </PlanOptions>
                    <FormFields>
                        <Select locationIcon={true} options={locationOps} name="location" value={values.location} onChange={handleChange} validate={touched.location && errors.location} />
                        <Input placeholder="Email" name="email" value={values.email} onChange={handleChange} validate={touched.email && errors.email} />
                        <PasswordRequirements password={values.password} confirm={values.confirmPassword} checkMatch={true}>
                            <Input placeholder="Password" type="password" name="password" value={values.password} onChange={handleChange} validate={touched.password && errors.password} />
                            <Input placeholder="Confirm Password" type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} validate={touched.confirmPassword && errors.confirmPassword} />
                        </PasswordRequirements>
                        <Input placeholder="Name on the card" name="nameOnCard" value={values.nameOnCard} onChange={handleChange} validate={touched.nameOnCard && errors.nameOnCard} />
                        <Input placeholder="1111 1111 1111 1111" name="cardNumber" value={values.cardNumber} onChange={handleChange} validate={touched.cardNumber && errors.cardNumber} />
                        <Flex>
                            <ExpDate>
                                <Input placeholder="MM/DD" name="expDate" value={values.expDate} onChange={handleChange} validate={touched.expDate && errors.expDate} />
                            </ExpDate>
                            <CVC>
                                <Input placeholder="CVC" name="cvc" value={values.cvc} onChange={handleChange} validate={touched.cvc && errors.cvc} />
                            </CVC>
                        </Flex>
                        <Terms>You will be charged <span>$7.99</span> every 1st of the month, You'll be charged <span>$0.24</span> tax.</Terms>
                        <Button type="submit" variant='primary-block'>Subscribe</Button>
                    </FormFields>
                </SignUpForm>
            </Container>
        </SignUpPage>
    )
}
export default SignUp;