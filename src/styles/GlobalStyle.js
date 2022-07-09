import { createGlobalStyle } from "styled-components";
import EstedadMedium from "assets/fonts/Estedad-Medium.woff";
import EstedadBold from "assets/fonts/Estedad-Bold.woff";

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
  background-color: ${({ theme }) => theme.colors.body};;
}

button{
  cursor: pointer;
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
    color: ${({ theme }) => theme.colors.text};;
}

`;
export default GlobalStyle;
