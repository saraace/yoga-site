import * as Yup from 'yup';
import { AccountSettings, Row, Col } from './styles'; 
import SingleFieldInput from '../../Forms/SingleField/Input';
import SingleFieldSelect from '../../Forms/SingleField/Select';

const MyAccount = () => {

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

    const save = (name, value) => {
        console.log(name, value);
    }

    return(
        <>
            <h3>My Account</h3>
            <AccountSettings>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <Row>
                    <Col>
                        <SingleFieldInput 
                            label="Name" 
                            name="name" 
                            initial="Sara" 
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                        <SingleFieldInput 
                            label="Email" 
                            name="email" 
                            initial="sara.g.acevedo@gmail.com" 
                            validationSchema={Yup.string().email("Please enter valid email").required("Required field")} 
                            onSave={save}
                        />
                        <SingleFieldSelect 
                            label="Studio Location" 
                            name="location" 
                            initial="0" 
                            options={locationOps}
                            locationIcon={true}
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                    </Col>
                    <Col>
                        <SingleFieldInput 
                            label="Phone Number" 
                            name="phone" 
                            initial="(866) 693-4422" 
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                        <SingleFieldInput 
                            label="Address" 
                            name="address" 
                            initial="11111 N 111th East Avenue" 
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                        <SingleFieldInput 
                            label="City" 
                            name="city" 
                            initial="Fort Lauderdale" 
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                    </Col>
                </Row>
            </AccountSettings>
        </>
    )
}

export default MyAccount;