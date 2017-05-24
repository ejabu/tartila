import { injectGlobal } from 'styled-components';
import myFont from './Roboto-Regular.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal `
  @font-face {
    font-family: 'Roboto';
    src: url(${myFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto','Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
