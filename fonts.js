import { css } from 'lit-element';

export const googleFont = css`
    /* cyrillic-ext */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKcg72nU6AF7xm.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKew72nU6AF7xm.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKcw72nU6AF7xm.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKfA72nU6AF7xm.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKcQ72nU6AF7xm.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKfw72nU6AFw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

`;

export const materialIcons = css`
    /* fallback */
    @font-face {
      font-family: 'Material Icons';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
    }

    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      vertical-align: sub;
      -webkit-font-smoothing: antialiased;
      background-color: unset !important;
    }

`;
