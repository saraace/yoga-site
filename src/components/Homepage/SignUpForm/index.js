import { useRef, useState, useEffect } from "react";
import { useTransform, motion } from "framer-motion";
import { useFormik } from "formik"; 
import * as Yup from "yup"; 
import Input from "../../Forms/Input";
import { Container, Button } from "theme-ui";
import { FullScreen, Row, Col, Phone, VideoWrapper, Form, ButtonWrapper, Small, Bg } from "./styles"; 

const SignUpForm = ({ scrollY, yVal, startPos, width, height }) => {

    const videoRef = useRef(null);

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
    const [ videoReady, setVideoReady ] = useState(false);
    const [ play, setPlay ] = useState(false);

    useEffect(() => {
        if(videoRef){
            videoRef.current.addEventListener("loadeddata", () => {
                setVideoReady(true);
            });
        }
    }, [videoRef]);

    useEffect(() => {

        if((yVal >= startPos-height)){
            setPlay(true);
        } else{
            setPlay(false);
        }
        
    }, [yVal]);

   useEffect(() => {
        if(play && videoReady){
            videoRef.current.play();
        } else if(!play){
            videoRef.current.pause();
        }
    }, [play, videoRef, videoReady]);

    // background position
    const bgPos = width > height? { width: '100%', left: '50%', bottom: '0', x: '-50%'} : { height: '100%', left: '50%', x: '-50%'}

    // background effects
    const bgScale = useTransform(scrollY, [startPos, startPos+height], [1.2, 1]);
    const bgY = useTransform(scrollY, [startPos, startPos+height], ['-25%', '0%'])


    return(
        <FullScreen>
            <Container>
                <Row>
                    <Col>
                        <Phone>
                            <img src="/images/homepage/sign-up/phone.png" alt="Shift" />
                            <VideoWrapper>
                                <video ref={videoRef} src="/images/homepage/sign-up/phone-screen.mp4" muted loop/>  
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
            <motion.div>
                <Bg style={{ scale: bgScale, y: bgY, ...bgPos }} src="/images/homepage/sign-up/bg.png" />
            </motion.div>
        </FullScreen>
    )
}

export default SignUpForm;