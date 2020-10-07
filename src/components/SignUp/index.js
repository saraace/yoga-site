/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import SignUpPage, {SignUpForm, PlanOptions, FormFields, ExpDate, CVC, Terms} from "./styles"
import Select from "../Forms/Select";
import Input from "../Forms/Input";
import PasswordRequirements from "../Forms/PasswordRequirements";


const SignUp = () => {

    const locationOptions = [
        {value: 0, displayValue: 'Select a gym location'},
        {value: 1, displayValue: 'Fort Lauderdale'},
        {value: 2, displayValue: 'Miami'}
    ]
    return(
        <SignUpPage>
            <Container>
                <h1>Get started with a Yoga Joint account!</h1>
                <SignUpForm>
                    <PlanOptions>
                        Hello World
                    </PlanOptions>
                    <FormFields>
                        <Select locationIcon={true} options={locationOptions} />
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