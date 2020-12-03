import { forwardRef, useState, useEffect } from "react";
import { useFormik } from "formik"; 
import * as Yup from "yup"; 
import Input from "../../Forms/Input";
import { Container, Button } from "theme-ui";
import { FullScreen, Row, Col, Phone, VideoWrapper, Form, ButtonWrapper, Small } from "./styles"; 

const Scene12 = forwardRef(({ active }, ref) => {

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

    // video background
    const [ play, setPlay ] = useState(false);

    useEffect(() => {
        if(ref){
            ref.current.addEventListener("loadeddata", () => {
                setPlay(true);
            });
        }
    }, [ref]);

   useEffect(() => {
        if(active && play){
            ref.current.play();
        } else if(!active){
            ref.current.pause();
        }
    }, [active, ref, play]);

    return(
        <FullScreen>
            <Container>
                <Row>
                    <Col>
                        <Phone>
                            <img src="/images/homepage/scene-12/phone.png" alt="Shift" />
                            <VideoWrapper>
                                <video ref={ref} src="/images/homepage/scene-12/phone-screen.mp4" muted loop/>  
                            </VideoWrapper>
                        </Phone>
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <h2><strong>SHIFT</strong>&nbsp;your&nbsp;routine, get&nbsp;started now!</h2>
                            <p>Lectus sed sit purus donec nunc, malesuada posuere in. Quis ut fringilla ut nec. Malesuada iaculis quis ultricies est lorem tellus ac. Arcu eu porta eu fermentum lorem amet malesuada.</p>
                            <form>
                                <Input 
                                    type="text"
                                    className="underline" 
                                    placeholder="Full Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    validate={touched.name && errors.name}
                                />
                                <Input 
                                    type="text"
                                    className="underline"
                                    placeholder="Email"
                                    name="email"
                                    values={values.email}
                                    onChange={handleChange}
                                    validate={touched.email && errors.email}
                                />
                                <Input 
                                    type="text"
                                    className="underline"
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
            </Container>
        </FullScreen>
    )
})

export default Scene12;