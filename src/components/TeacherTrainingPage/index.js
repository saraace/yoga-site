import { Container } from "theme-ui";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AnimatePresence } from "framer-motion";
import PageBackground from "../PageBackground";
import PageHeader from "../PageHeader";
import Select from "../Forms/Select"; 
import Input from "../Forms/Input";
import Textarea from "../Forms/Textarea";
import CheckboxGroup from "../Forms/OptionGroup";
import Checkbox from "../Forms/Checkbox";
import ValidationWrapper from "../Forms/Validation/ValidationWrapper";
import ValidationLabel from "../Forms/Validation/ValidationLabel";
import { FormSection, SectionTitle, Row, Col12, Col6, Address, Referral, CheckboxField, SubmitButton } from "./styles";

const TeacherTrainingPage = () => {

    const trainingDateOps = [
        {
            displayValue: "Select a training date", 
            value: 0
        }
    ];

    const stateOps = [
        {
            displayValue: "State", 
            value: "state"
        }
    ]

    const referralOps = [
        {
            value: "facebook", 
            displayValue: "Facebook ad"
        }, 
        {
            value: "post", 
            displayValue: "Social Media post"
        }, 
        {
            value: "email",
            displayValue: "Email"
        }, 
        {
            value: "class", 
            displayValue: "Class Announcement", 
        }, 
        {
            value: "other", 
            displayValue: "Other"
        }
    ];

    const submit = () => {
        console.log('Submit');
    }

    const trainingSchema = Yup.object().shape({
        training_date: Yup.string().required("Required field"),
        first_name: Yup.string().required("Required field"), 
        last_name: Yup.string().required("Required field"),
        birthdate: Yup.string().required("Required field"),
        age: Yup.string().required("Required field"),
        street_address: Yup.string().required("Required field"),
        city: Yup.string().required("Required field"),
        state: Yup.string().required("Required field"),
        zip: Yup.string().required("Required field"),
        email: Yup.string().required("Required field"),
        phone: Yup.string().required("Required field"),
        current_occupation: Yup.string().required("Required field"),
        recommendation: Yup.string().required("Required field"), 
        experience: Yup.string().required("Required field"), 
        expectations: Yup.string().required("Required field"), 
        health_conditions: Yup.string().required("Required field"),
        health_practices: Yup.string().required("Required field"),
        other: Yup.string().required("Required field"), 
        referral: Yup.string().required("Required field"), 
        signature: Yup.string().required("Required field"), 
        date: Yup.string().required("Required field"), 
        agreement_1: Yup.string().oneOf(["0"], "Must Accept"), 
        agreement_2: Yup.string().oneOf(["0"], "Must Accept"), 
        agreement_3: Yup.string().oneOf(["0"], "Must Accept")
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            training_date: "",
            first_name: "", 
            last_name: "", 
            birthdate: "",
            age: "", 
            street_address: "", 
            city: "", 
            state: "", 
            zip: "", 
            email: "", 
            phone: "", 
            current_occupation: "",
            recommendation: "", 
            experience: "", 
            expectations: "", 
            health_conditions: "",
            health_practices: "", 
            other: "",
            referral: "", 
            signature: "", 
            date: "", 
            agreement_1: "", 
            agreement_2: "", 
            agreement_3: ""
        }, 
        validationSchema: trainingSchema, 
        onSubmit: submit
    })

    return(
        <>
            <PageBackground src="/images/teacher-training/bg.jpg" />
            <PageHeader heading="Teacher training enrollment application">
                <p>Empower the movement SHIFT Series</p>
            </PageHeader>
            <Container variant="small">
                <form onSubmit={handleSubmit}>
                    <FormSection>
                        <SectionTitle>Training Date</SectionTitle>
                        <Row>
                            <Col12><Select name="training_date" options={trainingDateOps} value={values.training_date} onChange={handleChange} validate={touched.training_date && errors.training_date} /></Col12>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <SectionTitle>Basic Information</SectionTitle>
                        <Row>
                            <Col6>
                                <Input name="first_name" placeholder="First Name" value={values.first_name} onChange={handleChange} validate={touched.first_name && errors.first_name} />
                            </Col6>
                            <Col6>
                                <Input name="last_name" placeholder="Last Name" value={values.last_name} onChange={handleChange} validate={touched.last_name && errors.last_name} />
                            </Col6>
                        </Row>
                        <Row>
                            <Col6>
                                <Input name="birthdate" placeholder="MM/DD/YYYY" value={values.birthdate} onChange={handleChange} validate={touched.birthdate && errors.birthdate} />
                            </Col6>
                            <Col6>
                                <Input name="age" placeholder="Age" value={values.age} onChange={handleChange} validate={touched.age && errors.age} />
                            </Col6>
                        </Row>
                    </FormSection>
                    <Address>
                        <Row>
                            <Col12>
                                <Input name="street_address" placeholder="Street Address" value={values.street_address} onChange={handleChange} validate={touched.street_address && errors.street_address} />
                            </Col12>
                        </Row>
                        <Row>
                            <Col6>
                                <Input name="city" placeholder="City" value={values.city} onChange={handleChange} validate={touched.city && errors.city} />
                            </Col6>
                            <Col6>
                                <Select name="state" options={stateOps} value={values.state} onChange={handleChange} validate={touched.state && errors.state} />
                            </Col6>
                            <Col6>
                                <Input name="zip" placeholder="ZIP Code" value={values.zip} onChange={handleChange} validate={touched.zip && errors.zip} />
                            </Col6>
                        </Row>
                    </Address>
                    <FormSection>
                        <Row>
                            <Col6>
                                <Input name="email" placeholder="Email" value={values.email} onChange={handleChange} validate={touched.email && errors.email} />
                            </Col6>
                            <Col6>
                                <Input name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} validate={touched.phone && errors.phone} />
                            </Col6>
                        </Row>
                        <Row>
                            <Col6>
                                <Input name="current_occupation" placeholder="What's your current occupation?" value={values.current_occupation} onChange={handleChange} validate={touched.current_occupation && errors.current_occupation} />
                            </Col6>
                        </Row>
                        <Row>
                            <Col12>
                                <Input name="reccomendation" placeholder="Did a YJ staff member (or training graduate) recommend you to this training? If so, who? We love to give props!" value={values.recommendation} onChange={handleChange} validate={touched.recommendation && errors.recommendation} />
                            </Col12>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <SectionTitle>Yoga Experience</SectionTitle>
                        <Row>
                            <Col12>
                                <Textarea name="experience" placeholder="How long have you been practicing yoga and what styles are you familiar with?" value={values.experience} onChange={handleChange} validate={touched.experience && errors.experience} />
                            </Col12>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <SectionTitle>Expectations</SectionTitle>
                        <Row>
                            <Col12>
                                <Textarea name="expectations" placeholder="What do you expect to gain from your teacher training experience?" value={values.expectations} onChange={handleChange} validate={touched.expectations && errors.expectations} />
                            </Col12>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <SectionTitle>Physical Health &amp; Conditions</SectionTitle>
                        <Row>
                            <Col12>
                                <Textarea name="health_conditions" placeholder="Do you have any health concerns that may affect your training? Tell us about your emotional and mental health (previous or current therapy, type, length of time, eating disorders, experiences with depression, addictive disorders etc). Please note that any prior difficult experiences that you have gone through will be an added bonus to your students who have undergone difficult situations of their own." value={values.health_conditions} onChange={handleChange} validate={touched.health_conditions && errors.health_conditions} />
                            </Col12>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <SectionTitle>Health Practices</SectionTitle>
                        <Row>
                            <Col12>
                                <Textarea name="health_practices" placeholder="Describe your dietary habits, health, exercise practices and beliefs." value={values.health_practices} onChange={handleChange} validate={touched.health_practices && errors.health_practices}/>
                            </Col12>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <SectionTitle>Other Interesting Things About You</SectionTitle>
                        <Row>
                            <Col12>
                                <Textarea name="other" placeholder="Feel free to tell us any information you'd like to share!" value={values.other} onChange={handleChange} validate={touched.other && errors.other}/>
                            </Col12>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <SectionTitle>How Did You Hear About This Training?</SectionTitle>
                        <Row>
                            <Referral>
                                <CheckboxGroup name="referral" options={referralOps} multiple={true} value={values.referral} onChange={handleChange} validate={touched.referral && errors.referral}/>
                            </Referral>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <SectionTitle>Agreement of Terms</SectionTitle>
                        <Row>
                            <Col12>
                                <CheckboxField>
                                    <ValidationWrapper validate={touched.agreement_1 && errors.agreement_1}>
                                        <Checkbox name="agreement_1" value={values.agreement_1} onChange={handleChange} label="I understand that deposits for Hot Fusion Yoga™ Teacher Training are NON-REFUNDABLE and NON-TRANSFERABLE." />
                                    </ValidationWrapper>
                                    <AnimatePresence>
                                        {touched.agreement_1 && errors.agreement_1 && (
                                            <ValidationLabel>{errors.agreement_1}</ValidationLabel>
                                        )}
                                    </AnimatePresence>
                                </CheckboxField>
                                <CheckboxField>
                                    <ValidationWrapper validate={touched.agreement_2 && errors.agreement_2}>
                                        <Checkbox name="agreement_2" value={values.agreement_2} onChange={handleChange} label="I hereby acknowledge that I have read and understand the terms of my agreement on participating in Hot Fusion Yoga™ Teacher Training. All information subject to change without notification." />
                                    </ValidationWrapper>
                                    <AnimatePresence>
                                        {touched.agreement_2 && errors.agreement_2 && (
                                            <ValidationLabel>{errors.agreement_2}</ValidationLabel>
                                        )}
                                    </AnimatePresence>
                                </CheckboxField>
                                <CheckboxField>
                                    <ValidationWrapper validate={touched.agreement_3 && errors.agreement_3}>
                                        <Checkbox name="agreement_3" value={values.agreement_3} onChange={handleChange} label="I have read &amp; agree to the Yoga Joint Legal Waiver." />
                                    </ValidationWrapper>
                                    <AnimatePresence>
                                        {touched.agreement_3 && errors.agreement_3 && (
                                            <ValidationLabel>{errors.agreement_3}</ValidationLabel>
                                        )}
                                    </AnimatePresence>
                                </CheckboxField>
                            </Col12>
                        </Row>
                    </FormSection>
                    <FormSection>
                        <Row>
                            <Col6>
                                <Input name="signature" placeholder="Your Full Name will act as your signature*" value={values.signature} onChange={handleChange} validate={touched.signature && errors.signature} />
                            </Col6>
                            <Col6>
                                <Input name="date" placeholder="Today's Date*" value={values.date} onChange={handleChange} validate={touched.date && errors.date}/>
                            </Col6>
                        </Row>
                    </FormSection>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </form>
            </Container>
        </>
    )
}

export default TeacherTrainingPage;