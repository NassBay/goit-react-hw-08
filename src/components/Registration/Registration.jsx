import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./Registration.module.css";
import * as Yup from "yup";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const CustomField = ({ icon: Icon, ...props }) => (
  <div className={css.fieldWrapper}>
    <Icon className={css.icon} />
    <Field className={css.input} {...props} />
  </div>
);

export default function RegistrationForm() {

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >

        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <CustomField type="name" name="name" icon={RiLockPasswordFill} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label}>
            Email
            <CustomField type="email" name="email" icon={IoPerson} />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label className={css.label}>
            Password
            <CustomField
              type="password"
              name="password"
              icon={RiLockPasswordFill}
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
    </Formik>
  );
}
