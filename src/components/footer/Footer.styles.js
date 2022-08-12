import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer_color};
  padding: 30px 0;
  text-align: center;
  margin-top: 3rem;

  p {
    margin-bottom: 0.5rem;
  }
  .icon_container {
    margin: 0 5px;
    #heart_icon,
    #coffee_icon {
      margin: 0 2px;
    }
    #heart_icon {
      color: red;
    }
    #coffee_icon {
      color: saddlebrown;
    }
  }
  #github_link {
    color: royalblue;
    margin-right: 7px;
  }
`;
