import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import { useAppDispatch } from "app/store";
import { userSignIn, setAuthError, getAuthState } from "features/authSlice";

import { ButtonCTA } from "components/utils/Buttons";
import { Input } from "components/layout";
import AuthForm from "./AuthForm";

const SignIn = () => {
  document.title = "ورود - انجمن توسعه دهندگان";
  const dispatch = useAppDispatch();
  const { currentUser, authLoading } = useSelector(getAuthState);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignInFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(setAuthError(null));
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") dispatch(userSignIn({ email, password }));
    else
      dispatch(
        setAuthError({
          message: "تمامی فیلد ها الزامی هستند.",
        })
      );
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <AuthForm>
      <form action="#" className="auth_form" onSubmit={handleSignInFormSubmit}>
        <section className="form_group">
          <label htmlFor="email_input">ایمیل</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </section>

        <section className="form_group">
          <label htmlFor="pass_input">گذرواژه</label>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} />
        </section>

        {authLoading ? (
          <ButtonCTA p="0.5rem 1.5rem" className="loading_button">
            <Oval width={25} height={25} color="white" />
          </ButtonCTA>
        ) : (
          <button type="submit" className="form_submit">
            ادامه
          </button>
        )}

        <p className="auth_form_link-container">
          حساب کاربری ندارید ؟{" "}
          <Link to="/sign-up" className="link">
            ساخت حساب
          </Link>
        </p>
      </form>
    </AuthForm>
  );
};

export default SignIn;
