import { Button } from 'theme-ui';
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Forms/Input"; 
import Select from "../../Forms/Select";
import Textarea from "../../Forms/Textarea";
import { Row, Col, TextareaWrapper } from "./styles";

const WorkplaceWellnessForm = () => {

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

    const referalOps = [
        {
            value: 0,
            displayValue: 'How did you hear about us?'
        },
        {
            value: 1,
            displayValue: 'Google'
        },
        {
            value: 2,
            displayValue: 'Other'
        }
    ];

    const contact = () => {
        console.log('Contact!');
    }

    const contactSchema = Yup.object().shape({
        first_name: Yup.string().required("Required field"), 
        last_name: Yup.string().required("Required field"),
        email: Yup.string().email("Please enter a valid email").required("Required field"), 
        phone: Yup.string().required("Required field"),
        company: Yup.string().required("Required field"),
        referal: Yup.mixed().notOneOf([0, '0'], "Required field").required("Required field"),
        employees: Yup.string().required("Required field"),
        location: Yup.mixed().notOneOf([0, '0'], "Required field").required("Required field"),
        message: Yup.string().required("Required field")
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            first_name: "", 
            last_name: "", 
            email: "", 
            phone: "", 
            company: "",
            referal: "",
            employees: "",
            location: "", 
            message: ""
        },
        validationSchema: contactSchema,
        onSubmit: contact
    });

    return(
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
                <Col><Input name="company" placeholder="Company Name" value={values.company} onChange={handleChange} validate={touched.company && errors.company} /></Col>
                <Col><Select locationIcon={false} options={referalOps} name="referal" value={values.referal} onChange={handleChange} validate={touched.referal && errors.referal} /></Col>
            </Row>
            <Row>
                <Col><Input name="employees" placeholder="Number of Employees" value={values.employees} onChange={handleChange} validate={touched.employees && errors.employees} /></Col>
                <Col><Select locationIcon={true} options={locationOps} name="location" value={values.location} onChange={handleChange} validate={touched.location && errors.location} /></Col>
            </Row>
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
    )
}

export default WorkplaceWellnessForm;