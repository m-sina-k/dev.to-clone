import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useAppDispatch } from "app/store";
import { getAuthState, userSignOut } from "features/authSlice";

import { ButtonCTA } from "components/utils/Buttons";
import { Container } from "components/layout";

const SignOutStyle = styled.main`
  height: calc(100vh - (${({ theme }) => theme.layout.header_height}));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #sign-out_text {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  #sign-out_button {
    justify-self: flex-start;
  }
`;

const SignOutConfirm = () => {
  document.title = "خروج از حساب - انجمن توسعه دهندگان";

  const dispatch = useAppDispatch();
  const { currentUser } = useSelector(getAuthState);

  const handleSignOut = () => {
    dispatch(userSignOut());
    return <Navigate to="/" />;
  };

  if (!currentUser) return <Navigate to="/" />;

  return (
    <Container pageContainer>
      <SignOutStyle onClick={handleSignOut}>
        <p id="sign-out_text">از حساب کاربری خود خارج می شوید؟</p>
        <ButtonCTA p="12px 20px" id="sign-out_button">
          خروج از حساب
        </ButtonCTA>
      </SignOutStyle>
    </Container>
  );
};

export default SignOutConfirm;
