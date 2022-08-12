import { createGlobalStyle, keyframes } from "styled-components";
import EstedadMedium from "assets/fonts/Estedad-Medium.woff";
import EstedadBold from "assets/fonts/Estedad-Bold.woff";

const skeleton = keyframes`
to {
  opacity: 0.5;
}
`;

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Estedad-Medium';
    src: url(${EstedadMedium}) format('woff');
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: 'Estedad-Bold';
    src: url(${EstedadBold}) format('woff');
    font-style: normal;
    font-weight: bold;
}

:root{
  direction: rtl;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body{
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Estedad-Medium';
    min-height:100vh;
}

p {
  margin: 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
}

a{
  color: ${({ theme }) => theme.colors.text_muted};
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

img {
  max-width: 100%;
}

input,
button,
textarea,
input:focus,
button:focus,
textarea:focus {
  border: none;
  outline: none;
  font-family: 'Estedad-Medium';
}

input,textarea{
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
}

textarea{
  resize:none
}

button{
  cursor: pointer;
  border-radius: 6px;
  background-color: transparent;

  &:disabled{
    cursor:not-allowed;
    opacity:0.5;
  }
}

h1,
h2,
h3,
h4,
h5,
h5,
h6 {
    font-family: 'Estedad-Bold';
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0;
}

::placeholder {
    font-family: 'Estedad-Medium';
    color: ${({ theme }) => theme.colors.text};
}

hr{
  padding: 0;
  margin: 5px 0;
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border_color};
}

label{
  color: ${({ theme }) => theme.colors.text};
}

.ltr{
  direction: ltr;
}
.skeleton {
    animation: ${skeleton} 1s infinite alternate;
  }

  .loading_button {
        width: 100%;
        display: flex;
        justify-content: center;

        &--inline{
          width: max-content;
        }
      }
`;

export default GlobalStyle;
