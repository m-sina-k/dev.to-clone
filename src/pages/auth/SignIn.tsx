import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "app/store";
import { userSignIn, setAuthError,getAuthState } from "features/authSlice";
import AuthForm from "./AuthForm";
import { Input } from "components/layout";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useSelector(getAuthState);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignInFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(setAuthError(null));
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "")
      dispatch(userSignIn({ email, password }));
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
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button type="submit" className="form_submit">
          ادامه
        </button>
      </form>
    </AuthForm>
  );
};

export default SignIn;
