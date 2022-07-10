import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "app/store";
import AuthForm from "./AuthForm";
import { Input } from "components/layout";
import { userSignUp, setAuthError, getAuthState } from "features/authSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useSelector(getAuthState);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");

  interface FormData {
    email: string;
    password: string;
    passwordRepeat: string;
  }

  const validateFormData = (formData: FormData) => {
    const validEmailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { password, passwordRepeat } = formData;

    const isEmailValid = String(email).toLowerCase().match(validEmailPattern);

    const allFieldsAreFilled = Object.values(formData).every((v) => v !== "");

    if (allFieldsAreFilled && isEmailValid && password === passwordRepeat)
      return true;
    return false;
  };

  const handleSignUpFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setAuthError(null));
    const validated = validateFormData({ email, password, passwordRepeat });
    if (validated) dispatch(userSignUp({ email, password }));
    else
      dispatch(
        setAuthError({
          message:
            "تمامی فیلد ها الزامی هستند، از ایمیل معتبر استفاده کنید، گذرواژه و تکرار گذرواژه باید تطابق داشته باشند",
        })
      );
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <AuthForm>
      <form action="#" className="auth_form" onSubmit={handleSignUpFormSubmit}>
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
        <section className="form_group">
          <label htmlFor="pass-repeat_input">تکرار گذرواژه</label>
          <Input
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
        </section>
        <button type="submit" className="form_submit">
          ادامه
        </button>
      </form>
    </AuthForm>
  );
};

export default SignUp;
