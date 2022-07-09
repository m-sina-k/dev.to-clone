import styled from "styled-components";
import { Oval } from "react-loader-spinner";

const AppLoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.body};
  z-index: 99999;
`;

const AppLoading = () => {
  return (
    <AppLoadingStyle>
      <Oval
        color="#3b49df"
        secondaryColor="#3b49df33"
        ariaLabel="لطفا صبر کنید..."
      />
    </AppLoadingStyle>
  );
};

export default AppLoading;
