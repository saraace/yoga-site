import * as Yup from 'yup';
import { Button } from 'theme-ui';
import { AccountSettings, AccountPhoto, Photo, PhotoControls, Row, LeftCol, RightCol } from './styles'; 
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
    
    const stateOps = [
        {
            value: 'FL', 
            displayValue: 'Florida'
        }
    ]

    const save = (name, value) => {
        console.log(name, value);
    }

    return(
        <>
            <h3>My Account</h3>
            <AccountSettings>
                <AccountPhoto>
                    <Photo>
                        <img src="https://via.placeholder.com/64" />
                    </Photo>
                    <PhotoControls>
                        <div><Button variant="link-secondary">Change&nbsp;Photo</Button></div>
                        <div><Button variant="link-danger">Remove&nbsp;Photo</Button></div>
                    </PhotoControls>
                </AccountPhoto>
                <Row>
                    <LeftCol>
                        <SingleFieldInput 
                            label="Name" 
                            name="name" 
                            initial="Jane Cooper" 
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                        <SingleFieldInput 
                            label="Email" 
                            name="email" 
                            initial="janecooper143@gmail.com" 
                            validationSchema={Yup.string().email("Please enter valid email").required("Required field")} 
                            onSave={save}
                        />
                        <SingleFieldSelect 
                            label="Studio Location" 
                            name="location" 
                            initial="1" 
                            options={locationOps}
                            locationIcon={true}
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                        <SingleFieldInput 
                            label="Password" 
                            name="password" 
                            type="password"
                            initial="111111111" 
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                    </LeftCol>
                    <RightCol>
                        <SingleFieldInput 
                            label="Phone Number" 
                            name="phone" 
                            initial="(866) 693 - 4422" 
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
                        <SingleFieldSelect 
                            label="State" 
                            name="state" 
                            initial="FL" 
                            options={stateOps}
                            validationSchema={Yup.string().required("Required field")} 
                            onSave={save}
                        />
                    </RightCol>
                </Row>
            </AccountSettings>
        </>
    )
}

export default MyAccount;