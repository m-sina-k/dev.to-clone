import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAuthState, setAuthError } from "features/authSlice";

import { Container, Block } from "components/layout";
import { AuthFormStyle } from "./AuthForm.styles";

interface Props {
  children: React.ReactNode;
}

const AuthForm: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const { authError } = useSelector(getAuthState);

  // clear authError on render
  useEffect(() => {
    if (authError) dispatch(setAuthError(null));
  }, [dispatch]);

  return (
    <Container pageContainer>
      <AuthFormStyle>
        <div className="block_container">
          {/* auth error */}
          {authError?.message && (
            <section className="auth_error">
              <h3 className="title">خطا در احراز هویت</h3>
              <p className="message">
                {authError.message}
                {authError.errorCode && `کد خطا : ${authError.errorCode}`}
              </p>
            </section>
          )}

          <Block className="auth_form_container" p="2rem">
            {/* heading */}
            <section className="heading">
              <h3 className="title">به DEV Community خوش آمدید</h3>
            </section>

            <span className="separator">
              <span className="separator_text">ادامه با ایمیل و گذرواژه</span>
            </span>

            {children}
          </Block>
        </div>
      </AuthFormStyle>
    </Container>
  );
};

export default AuthForm;
