import { css } from 'lit-element';

export const storyCommonStyles = css`
  .tags-container {
    display: flex;
    flex-direction: column;
    white-space: pre;
    font-family: 'Ubuntu', sans-serif;
    overflow: scroll;
  }

  .tags-container > span {
    color: #688286;
    font-size: 15px;
    padding: 10px;
    width: fit-content;
    background-color: #2f2e2e;
    margin-bottom: 5px;
  }

  .light-txt {
    color: #53f7ef;
  }

  .card {
    width: 100%;
  }

  html {
    --seed-color-red: #de3d4c;
    --seed-color-red-focus: #ff00184d;
    --seed-color-red-hover: #bb3440;

    --seed-color-green: #22ac41;
    --seed-color-green-focus: #7fc72a45;
    --seed-color-green-hover: #199936;

    --seed-color-blue: #2dabb4;
    --seed-color-blue-focus: #2dabb445;
    --seed-color-blue-hover: #239aa3;

    --seed-color-yellow: #e6af0e;
    --seed-color-yellow-focus: #c89a0c3d;
    --seed-color-yellow-hover: #d5a927;

    --seed-color-purple: #903e8d;
    --seed-color-purple-focus: #903e8d5e;
    --seed-color-purple-hover: #663564;

    --seed-color-black: #2f2d2d;
    --seed-color-black-focus: #43434387;
    --seed-color-black-hover: #434343;

    --seed-color-orange: #d58309;
    --seed-color-orange-focus: #e09e2057;
    --seed-color-orange-hover: #b46e06;

    --seed-color-green-mate: #1C8281;
    --seed-color-green-mate-focus: #2dabb445;
    --seed-color-green-mate-hover: rgb(51, 121, 120);

    --seed-color-red-mate: #bf4545;
    --seed-color-red-mate-focus: #ff00184d;
    --seed-color-red-mate-hover: rgb(176, 63, 63);

    --seed-color-blue-mate: rgb(63, 118, 182);
    --seed-color-blue-mate-focus: #2dabb445;
    --seed-color-blue-mate-hover: rgb(53, 98, 149);
    }

  @media screen and (min-width: 768px) {
    .card {
      width: 50%;
    }
}
`;