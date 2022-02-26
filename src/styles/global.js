import { createGlobalStyle } from 'styled-components';

import PoppinsThin from 'assets/fonts/Poppins-Thin.ttf';
import PoppinsExtraLight from 'assets/fonts/Poppins-ExtraLight.ttf';
import PoppinsLight from 'assets/fonts/Poppins-Light.ttf';
import PoppinsRegular from 'assets/fonts/Poppins-Regular.ttf';
import PoppinsMedium from 'assets/fonts/Poppins-Medium.ttf';
import PoppinsMediumItalic from 'assets/fonts/Poppins-MediumItalic.ttf';
import PoppinsSemibold from 'assets/fonts/Poppins-SemiBold.ttf';
import PoppinsBold from 'assets/fonts/Poppins-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    font-weight: 100;
    src: url(${PoppinsThin});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 200;
    src: url(${PoppinsExtraLight});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 300;
    src: url(${PoppinsLight});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: "normal";
    src: url(${PoppinsRegular});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 500;
    src: url(${PoppinsMedium});
  }

  @font-face {
    font-family: "Poppins";
    font-style: italic;
    src: url(${PoppinsMediumItalic});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 600;
    src: url(${PoppinsSemibold});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 700;
    src: url(${PoppinsBold});
  }

  body {
    margin: 0;
    font-family: "Poppins";
    font-weight: 300;
    font-size: 14px;
  }

  .ant-btn {
    &-text {
      background-image: none !important;
    }
  }
`;

export default GlobalStyle;
