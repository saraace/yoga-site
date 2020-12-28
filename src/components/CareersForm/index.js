import { Button } from 'theme-ui';
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Forms/Input";
import Select from "../Forms/Select";
import OptionGroup from "../Forms/OptionGroup";
import Textarea from "../Forms/Textarea";
import { Careers, Row, Col, Schedule, TextareaWrapper } from "./styles";

const CareersForm = () => {

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

    const positionOps = [
        {
            value: 0, 
            displayValue: "Select a position"
        }, 
        {
            value: 1, 
            displayValue: 'Instructor'
        }
    ]; 

    const scheduleOps = [
        { value: 'sunday', displayValue: 'Sunday' }, 
        { value: 'monday', displayValue: 'Monday' }, 
        { value: 'tuesday', displayValue: 'Tuesday' }, 
        { value: 'wednesday', displayValue: 'Wednesday' }, 
        { value: 'thursday', displayValue: 'Thursday' }, 
        { value: 'friday', displayValue: 'Friday' }, 
        { value: 'saturday', displayValue: 'Saturday' }
    ];

    const submit = () => {
        console.log('Careers Submit'); 
    };

    const careersSchema = Yup.object().shape({
        first_name: Yup.string().required("Required field"), 
        last_name: Yup.string().required("Required field"),
        email: Yup.string().email("Please enter a valid email").required("Required field"), 
        phone: Yup.string().required("Required field"),
        position: Yup.mixed().notOneOf([0, '0'], "Required field").required("Required field"),
        location: Yup.mixed().notOneOf([0, '0'], "Required field").required("Required field"),
        schedule: Yup.mixed().required("Required field"),
        message: Yup.string().required("Required field")
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            first_name: "", 
            last_name: "", 
            email: "", 
            phone: "", 
            position: "", 
            location: "", 
            schedule: [],
            message: ""
        },
        validationSchema: careersSchema,
        onSubmit: submit
    });

    return(
        <Careers>
            <h2>I'm Ready to Make the SHIFT!</h2>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col><Input name="first_name" placeholder="First Name" value={values.first_name} onChange={handleChange} validate={touched.first_name && errors.first_name} /></Col>
                    <Col><Input name="last_name" placeholder="Last Name" value={values.last_name} onChange={handleChange} validate={touched.last_name && errors.last_name} /></Col>
                </Row>
                <Row>
                    <Col><Input name="email" placeholder="Email" value={values.email} onChange={handleChange} validate={touched.email && errors.email} /></Col>
                    <Col><Input name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} validate={touched.phone && errors.phone} /></Col>
                </Row>
                <Row>
                    <Col><Select options={positionOps} name="position" value={values.position} onChange={handleChange} validate={touched.position && errors.position} /></Col>
                    <Col><Select locationIcon={true} options={locationOps} name="location" value={values.location} onChange={handleChange} validate={touched.location && errors.location} /></Col>
                </Row>
                <Schedule>
                    <OptionGroup options={scheduleOps} multiple={true} className="schedule" name="schedule" value={values.schedule} onChange={handleChange} validate={touched.schedule && errors.schedule} />
                </Schedule>
                <Row>
                    <TextareaWrapper>
                        <Textarea name="message" placeholder="Message us here" value={values.message} onChange={handleChange} validate={touched.message && errors.message} />
                    </TextareaWrapper>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit" variant='primary-block'>Subscribe</Button>
                    </Col>
                </Row>
            </form>
        </Careers>
    )
}

export default CareersForm;