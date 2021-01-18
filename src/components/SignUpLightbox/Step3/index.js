import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Flex } from "theme-ui";
import StepHeader from "../StepHeader";
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import { PaymentInfo, Row, LeftCol, RightCol, Terms, Address1 } from "./styles";

const Step3 = ({ onNext }) => {

    const stateOps = [
        {
            value: 0,
            displayValue: 'State'
        },
        {
            value: 'FL',
            displayValue: 'Florida'
        }
    ];

    const step3Submit = () => {
        console.log('Step 3 Submit');
        onNext();
    } 

    const step3Schema = Yup.object().shape({ 
        nameOnCard: Yup.string().required("Required field"), 
        cardNumber: Yup.string().required("Required field"), 
        expDate: Yup.string().required("Required field"), 
        cvc: Yup.string().required("Required field"), 
        address_1: Yup.string().required("Required field"), 
        address_2: Yup.string(), 
        city: Yup.string().required("Required field"), 
        state: Yup.string().required("Required field"), 
        zip: Yup.string().required("Required field")
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            nameOnCard: "", 
            cardNumber: "", 
            expDate: "", 
            cvc: "", 
            address_1: "", 
            address_2: "", 
            city: "", 
            state: "", 
            zip: ""
        },
        validationSchema: step3Schema,
        onSubmit: step3Submit
    }); 

    return(
        <div>
            <StepHeader total="3" current="3" heading="Payment"></StepHeader>
            <form onSubmit={handleSubmit}>
                <PaymentInfo>
                    <Input placeholder="Name on the card" name="nameOnCard" value={values.nameOnCard} onChange={handleChange} validate={touched.nameOnCard && errors.nameOnCard} />
                    <Input placeholder="1111 1111 1111 1111" name="cardNumber" value={values.cardNumber} onChange={handleChange} validate={touched.cardNumber && errors.cardNumber} />
                    <Row>
                        <LeftCol>
                            <Input placeholder="MM/DD" name="expDate" value={values.expDate} onChange={handleChange} validate={touched.expDate && errors.expDate} />
                        </LeftCol>
                        <RightCol>
                            <Input placeholder="CVC" name="cvc" value={values.cvc} onChange={handleChange} validate={touched.cvc && errors.cvc} />
                        </RightCol>
                    </Row>
                    <Terms>You will be charged <span>$7.99</span> every 1st of the month, You'll be charged <span>$0.24</span> tax.</Terms>
                </PaymentInfo>
                <Row>
                    <Address1>
                        <Input placeholder="Address" name="address_1" value={values.address_1} onChange={handleChange} validate={touched.address_1 && errors.address_1} />
                    </Address1>
                    <div>
                        <Input placeholder="Apt. #" name="address_2" value={values.address_2} onChange={handleChange} validate={touched.address_2 && errors.address_2} />
                    </div>
                </Row>
                <Input placeholder="City" name="city" value={values.city} onChange={handleChange} validate={touched.city && errors.city} />
                <Row>
                    <LeftCol>
                        <Select options={stateOps} name="state" value="values.state" onChange={handleChange} validate={touched.state && errors.state} />
                    </LeftCol>
                    <RightCol>
                        <Input placeholder="Zip Code" name="zip" value={values.zip} onChange={handleChange} validate={touched.zip && errors.zip} />
                    </RightCol>
                </Row>
                <Button type="submit" variant="primary-block">Continue</Button>
            </form>
        </div>
    )
}

export default Step3;