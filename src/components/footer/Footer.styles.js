import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer_color};
  padding: 30px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  p {
    margin-bottom: 0.5rem;
  }

  #heart_icon,
  #coffee_icon {
    margin: 0 5px;
  }
  #heart_icon {
    color: red;
  }
  #coffee_icon {
    color: brown;
  }
  #github_link {
    color: royalblue;
    margin-right: 7px;
  }
`;
