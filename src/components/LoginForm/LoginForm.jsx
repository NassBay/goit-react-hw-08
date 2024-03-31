import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import * as Yup from "yup";


const CustomField = ({ icon: Icon, ...props }) => (
  <div className={css.fieldWrapper}>
    <Icon className={css.icon} />
    <Field className={css.input} {...props} />
  </div>
);

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form} autoComplete="off">
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
          Log In
        </button>
        <div className={css.regLink}>
          <p className={css.or}>or</p>
          <NavLink className={css.registration} to="/register">
            register
          </NavLink>
        </div>
      </Form>
    </Formik>
  );
}
