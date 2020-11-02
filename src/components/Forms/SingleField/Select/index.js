import { useState } from 'react';
import { Button } from 'theme-ui';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SingleFieldForm, Field } from './styles';
import Select from '../../Select';

const SingleFieldSelect = ({ label, name, initial, validationSchema, options, onSave, ...rest }) => {

    const [ editable, setEditable ] = useState(false);

    const initialValues = {}
    initialValues[name] = initial;

    const schema = {}; 
    schema[name] = validationSchema;

    const save = () => {
        onSave(name, values[name]);
        setEditable(false);
    }

    const { values, touched, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues, 
        validationSchema: Yup.object().shape(schema),
        onSubmit: save
    });

    return(
        <SingleFieldForm onSubmit={handleSubmit}>
            <Field>
                <Select 
                    {...rest}
                    {...{label, name, options}} 
                    className="underline"
                    onChange={handleChange}
                    value={values[name]}
                    validate={touched[name] && errors[name]}
                    disabled={!editable}
                /> 
            </Field>
            <div>
                {!editable && <Button variant="small-link" onClick={() => setEditable(true)}>Change</Button>}
                {editable && <Button type="submit" variant="small-link">Save</Button>}
            </div>
        </SingleFieldForm>
    )
}

export default SingleFieldSelect;