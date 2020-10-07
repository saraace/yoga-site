/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import SignUpPage, { SignUpForm, PlanOptions, Plans, RadioGroup, FormFields, ExpDate, CVC, Terms } from "./styles"
import Select from "../Forms/Select";
import Input from "../Forms/Input";
import OptionGroup from "../Forms/OptionGroup";
import Plan from "./Plan";
import PasswordRequirements from "../Forms/PasswordRequirements";

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
    ]

    const locationOps = [
        {value: 0, displayValue: 'Select a gym location'},
        {value: 1, displayValue: 'Fort Lauderdale'},
        {value: 2, displayValue: 'Miami'}
    ]; 
    
    return(
        <SignUpPage>
            <Container>
                <h1>Get started with a Yoga Joint account!</h1>
                <SignUpForm>
                    <PlanOptions>
                        <RadioGroup>
                            <OptionGroup options={freqOps} name="freq" className="freq" />
                        </RadioGroup>
                        <Plans>
                            {monthlyOps.map(plan => {
                                return(
                                    <Plan {...plan} name="plan" />
                                )
                            })}
                        </Plans>
                    </PlanOptions>
                    <FormFields>
                        <Select locationIcon={true} options={locationOps} />
                        <Input placeholder="Email" />
                        <PasswordRequirements>
                            <Input placeholder="Password" type="password" />
                            <Input placeholder="Confirm Password" type="password" />
                        </PasswordRequirements>
                        <Input placeholder="Name on the card" />
                        <Input placeholder="1111 1111 1111 1111" />
                        <Flex>
                            <ExpDate>
                                <Input placeholder="MM/DD" />
                            </ExpDate>
                            <CVC>
                                <Input placeholder="CVC" />
                            </CVC>
                        </Flex>
                        <Terms>You will be charged <span>$7.99</span> every 1st of the month, You'll be charged <span>$0.24</span> tax.</Terms>
                        <Button variant='primary-block'>Subscribe</Button>
                    </FormFields>
                </SignUpForm>
            </Container>
        </SignUpPage>
    )
}
export default SignUp;