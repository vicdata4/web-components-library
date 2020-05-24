import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import '../carousel-css';
import '../carousel-stepper';
import '../components/utils/card-examples';

storiesOf('Seed Catalog', module)
  .add('Carousel Css', () => html`
    <style>
      ${seedStyle}
      ${storyCommonStyles}
      ${cssTemplateColors}

      .title {
        margin-bottom: 20px;
      }

      .bl-u {
        background-color: #43aad7;
      }

      .oran-g {
        background-color: #e18b46;
      }

      .gre-e {
        background-color: #5dbe59;
      }

      .purp-l {
        background-color: #b250b2;
      }

      .w-hite {
        font-family: sans-serif;
        color: #dadada;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 1.2px;
        line-height: 20px;
      }

      b {
        color: #00daff;
      }

      .white-color {
        color: white;
      }

      @media screen and (min-width: 768px) {
        .carousel-container {
          width: 800px;
        }
      }
    </style>
    
    <button class="sd-btn-mix black title"><i class="material-icons green">settings_overscan</i>Carousel CSS</button>
        <p class="package">
    <span class="purp">import</span> { <span class="light-txt">LitElement</span>, <span class="light-txt">html</span>, <span class="light-txt">css</span></span> } <span class="purp">from</span> <span class="ora">'lit-element'</span>;
    <span class="purp">import</span> <span class="ora">'seed-catalog/carousel-css.js</span>';
    <span class="purp">import</span> <span class="ora">'seed-catalog/carousel-stepper.js</span>';

    <span class="blu">class</span> <span class="gree">MyComponent</span> <span class="blu">extends</span> <span class="gree">LitElement</span> {
      <span class="blu">static get</span> <span class="yellou">styles</span>() {
        <span class="purp">return</span> [
          <span class="yellou">css</span>\`
            <span class="yellou">.custom-class</span> {
                ...
            }
          <span>\`</span>
        ];
      }

      <span class="yellou">render</span><span>${`() {`}</span>
        <span class="purp">return</span> <span class="yellou">html</span><span>\`</span>
          <span class="gre"><</span><span class="blu">seed-carousel-css</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"custom-class"</span><span class="gre">></span>Card 1<span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"custom-class"</span><span class="gre">></span>Card 2<span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"custom-class"</span><span class="gre">></span>Card 3<span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"custom-class"</span><span class="gre">></span>Card 4<span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">seed-carousel-stepper </span><span class="light-txt">slot</span>=<span class="ora">"stepper"</span><span class="gre">></span>Card 4<span class="gre">${`</`}</span><span class="blu">seed-carousel-stepper</span><span class="gre">></span>
          <span class="gre">${`</`}</span><span class="blu">seed-carousel-css</span><span class="gre">></span>
        <span>\`</span>;
      }
    }
        
        </p>
        <div class="carousel-container">
          <seed-carousel-css>
            <card-examples class="bl-u"></card-examples>
            <card-examples class="oran-g"></card-examples>
            <card-examples class="gre-e"></card-examples>
            <card-examples class="purp-l"></card-examples>
            <seed-carousel-stepper slot="stepper"></seed-carousel-stepper>
          </seed-carousel-css>
        </div>
        <p class="w-hite">Carousel stepper <b>requirements</b></p>
        <p class="w-hite">We provide a <b class="white-color">${`<carousel-css-stepper>`}</b> component but you can use whatever you want as long as you respect two rules.</p>
        <p class="w-hite">· Slotted stepper component must contains a property called <b>'index'</b> which indicates the current step.</p>
        <p class="w-hite">· Also dispatch an event called <b>'set-selected-step'</b> when clicking on the step-button as below:</p>
        <p class="package">

      <span class="blu">this</span>.<span class="yellou">dispatchEvent</span>(<span class="blu">new</span> <span class="gree">CustomEvent</span>(<span class="ora">'set-selected-step'</span>, { <span class="light-txt">detail: index, composed:</span> <span class="blu">true</span>, <span class="light-txt">bubbles:</span> <span class="blu">true</span> }));

        </p>



        <br><br><br>
        <div class="carousel-container">
          <seed-carousel-css>
            <card-examples class="bl-u" .width="${200}" .height="${200}"></card-examples>
            <card-examples class="oran-g" .width="${200}" .height="${200}"></card-examples>
            <card-examples class="gre-e" .width="${200}" .height="${200}"></card-examples>
            <card-examples class="purp-l" .width="${200}" .height="${200}"></card-examples>
            <card-examples class="bl-u" .width="${200}" .height="${200}"></card-examples>
            <card-examples class="oran-g" .width="${200}" .height="${200}"></card-examples>
            <card-examples class="gre-e" .width="${200}" .height="${200}"></card-examples>
            <card-examples class="purp-l" .width="${200}" .height="${200}"></card-examples>
            <seed-carousel-stepper slot="stepper"></seed-carousel-stepper>
          </seed-carousel-css>
        </div>
    `);
