import { ErrorMessage, Formik } from "formik";
import { Button, TextField, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import { getAuth } from 'firebase/auth'
import { signInWithGoogle } from "../firebase";
import googleButtonIcon from "../assets/google-logo.svg";

function LoginPanel() {
  const InputField = styled(TextField)({
    textTransform: "none",
  });

  const GeoButton = styled(Button)({
    padding: 12,
    textTransform: "none",
    "&:hover": {
      color: "#FAF1D3",
    },
  });

  const GoogleButton = styled(Button)({
    padding: 12,
    textTransform: "none",
    color: "#717171",
    fontWeight: "normal",
  });

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(12, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "foobar",
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validate={(values) => {
        const errors = { values };
        if (!values.email) {
          errors.values.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.values.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      <Stack spacing={2}>
        <InputField
          fullWidth
          id="username"
          name="username"
          label="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <InputField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <ErrorMessage name="email" component="input" />
        <InputField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <ErrorMessage name="password" component="input" />
        <GeoButton variant="contained">login</GeoButton>
        <GoogleButton variant="outlined">
          <Stack spacing={2} direction="row">
            <img src={googleButtonIcon} />
            <span>Continue with Google</span>
          </Stack>
        </GoogleButton>
      </Stack>
    </Formik>
  );
}

export default LoginPanel;
