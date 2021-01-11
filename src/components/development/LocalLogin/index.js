/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { LocalLogin, Backdrop, Container } from "./styles";
import Input from "../../Forms/Input";

const LocalLoginContainer = ({ code_verifier }) => {
  const dispatch = useDispatch();

  const signUp = ({token}) => {
    dispatch({
      type: "AUTHENTICATE",
      payload: { token, code_verifier },
    });
  };

  const signupSchema = Yup.object().shape({
    token: Yup.string().required("Required field"),
  });

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      token: "",
    },
    validationSchema: signupSchema,
    onSubmit: signUp,
  });

  return (
    <LocalLogin>
      <Backdrop />
      <Container>
        <h2>LOCAL DEV LOGIN</h2>
        <p>
          Due to restrictions with Marianatek, for local development, copy the
          "code" from the opened window url after logging in and submit the
          form
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="underline"
            placeholder="Token"
            name="token"
            value={values.token}
            onChange={handleChange}
            validate={touched.token && errors.token}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </Container>
    </LocalLogin>
  );
};

export default LocalLoginContainer;
