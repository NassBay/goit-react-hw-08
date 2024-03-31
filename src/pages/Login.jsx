import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import PageTitle from "../components/PageTitle/PageTitle";

export default function Login() {
  return (
    <div>
      <PageTitle>Log In</PageTitle>
      <LoginForm />
    </div>
  );
}
