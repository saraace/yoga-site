import { useFormik } from "formik"; 
import * as Yup from "yup"; 
import Input from "../../../Forms/Input";
import { Button } from "theme-ui";
import { FullScreen, SceneContainer, Row, Col, Phone, VideoWrapper, Form, ButtonWrapper, Small, Bg } from "./styles"; 

const SignUpForm = ({ staticScenes, yVal, startPos }) => {

    const signUp = () => {
        console.log('Sign up!');
    }

    const signupSchema = Yup.object().shape({
        name: Yup.string().required("Required field"), 
        email: Yup.string().email("Please enter a valid email").required("Required field"), 
        phone_number: Yup.string().required("Required field")
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "", 
            email: "", 
            phone_number: ""
        }, 
        validationSchema: signupSchema,
        onSubmit: signUp
    })

    return(
        <FullScreen>
            <SceneContainer variant="small">
                <Row>
                    <Col>
                        <Phone>
                            <img src="/images/homepage/sign-up/phone.png" alt="Shift" />
                            {!staticScenes && (
                                <VideoWrapper>
                                    {((yVal >= startPos) && <video src="/images/homepage/sign-up/phone-screen.mp4" autoPlay muted loop/>)}
                                </VideoWrapper>
                            )}
                            {staticScenes && (
                                <VideoWrapper />
                            )}
                        </Phone>
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <h2><strong>SHIFT</strong>&nbsp;Your&nbsp;Routine, Get&nbsp;Started Now!</h2>
                            <p>Fill out your name and phone number below to sign up for our online classes and experience the benefits of a real SHIFT!</p>
                            <form>
                                <Input 
                                    type="text"
                                    placeholder="Full Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    validate={touched.name && errors.name}
                                />
                                <Input 
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    values={values.email}
                                    onChange={handleChange}
                                    validate={touched.email && errors.email}
                                />
                                <Input 
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone_number"
                                    values={values.phone_number}
                                    onChange={handleChange}
                                    validate={touched.phone_number && errors.phone_number}
                                />
                                <ButtonWrapper>
                                    <Button>Sign Up</Button> 
                                </ButtonWrapper>
                                <Small>By clicking sign up, you agree to our terms of service and privacy policy</Small>
                            </form>
                        </Form>
                    </Col>
                </Row>
            </SceneContainer>
        </FullScreen>
    )
}

export default SignUpForm;