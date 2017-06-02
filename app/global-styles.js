import { injectGlobal } from 'styled-components';
import myFont from './Roboto-Regular.ttf';
import Uthmanic from './fonts/Uthmanic.ttf';
import AysaarIcon from './fonts/Aysaar-Icon.ttf';
import EvilIcons from './fonts/EvilIcons.ttf';
import FontAwesome from './fonts/FontAwesome.ttf';
import AraHamah1964R from './fonts/AraHamah1964R.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal `
  @font-face {
    font-family: 'Roboto';
    src: url(${myFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Uthmanic';
    src: url(${Uthmanic}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'AysaarIcon';
    src: url(${AysaarIcon}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'FontAwesome';
    src: url(${FontAwesome}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'EvilIcons';
    src: url(${EvilIcons}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AraHamah1964R';
    src: url(${AraHamah1964R}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box; }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'EvilIcons', Arial, sans-serif;
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
