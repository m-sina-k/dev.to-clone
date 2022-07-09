import { useSelector } from "react-redux";
import { getAuthState } from "features/authSlice";
import { AuthFormStyle } from "./AuthForm.styles";
import { Container, Block } from "components/layout";
import { Oval } from "react-loader-spinner";

interface Props {
  children: React.ReactNode;
}

const AuthForm: React.FC<Props> = ({ children }) => {
  const { authLoading, authError } = useSelector(getAuthState);

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
            {/* loading overlay  */}
            {authLoading && (
              <div className="auth_form_loading_overlay">
                <Oval
                  color="#3b49df"
                  secondaryColor="#3b49df33"
                  ariaLabel="لطفا صبر کنید..."
                />
              </div>
            )}

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
