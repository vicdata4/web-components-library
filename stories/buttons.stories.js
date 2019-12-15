import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Catalog', module)
  .add('Buttons', () => html`
    <style>
      ${seedStyle}
      ${storyCommonStyles}
      ${cssTemplateColors}

      h2, p {
        color: red;
      }

      h2:hover, h5:hover {
        cursor: unset;
        background-color: none;
      }

      .light {
        color: #e4bb05;
        font-size: 1.5rem;
      }

      .decorator {
        color: #e4bb05;
      }

      a {
        color: #989898;
        text-decoration: none;
      }

      p > span {
        margin: 10px;
        margin-left: 0;
        margin-right: 0;
      }
    </style>
    <button class="sd-btn-mix black title"><i class="material-icons green">touch_app</i>Buttons</button>
    <h2 class="sd-btn black">CSS .class Selectors</h2><br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn colors</span></h2>
    <button class="sd-btn sm red">red</button>
    <button class="sd-btn sm blue">blue</button>
    <button class="sd-btn sm green">green</button>
    <button class="sd-btn sm yellow">yellow</button>
    <button class="sd-btn sm purple">purple</button>
    <button class="sd-btn sm black">black</button>
    <button class="sd-btn sm orange">orange</button>
    <button class="sd-btn sm red-mate">red-mate</button>
    <button class="sd-btn sm blue-mate">blue-mate</button>
    <button class="sd-btn sm green-mate">green-mate</button>
    <button class="sd-btn sm">default</button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn red"</span><span class="gre">></span><span class="gre"></span>red<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span><span class="gre"></span>blue<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn green"</span><span class="gre">></span><span class="gre"></span>green<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn purple"</span><span class="gre">></span><span class="gre"></span>purple<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
  
    
    <span class="comm">// Also you can use ${`<a></a>`} tags, getting the same behaviour</span>

    <span class="gre"><</span><span class="blu">a </span><span class="light-txt">href</span>=<span class="ora">"/" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn green-mate"</span><span class="gre">></span><span class="gre"></span>Link tag<span class="gre">${`</`}</span><span class="blu">a</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">a </span><span class="light-txt">href</span>=<span class="ora">"/" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span><span class="gre"></span>blue<span class="gre">${`</`}</span><span class="blu">a</span><span class="gre">></span>
    </p>
    <br>
    <button class="sd-btn red-mate">Profile</button><button class="sd-btn black">Play now</button><button class="sd-btn blue-mate">Forest</button><button class="sd-btn purple">Podcast</button><a href="/" class="sd-btn green-mate">Link tag</a><br><br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn-mix</span></h2><button class="sd-btn-mix red-mate"><i class="material-icons">flight</i>Flight</button><button class="sd-btn-mixr">Flight<i class="material-icons">flight</i></button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix red"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>flight<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Flight<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix blue"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>lock<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Lock<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mixr green"</span><span class="gre">></span><span class="gre"></span>Home<span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>home<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn sm</span></h2>
    <button class="sd-btn blue sm">Favorite</button>
    <button class="sd-btn purple sm">Select</button>
    <button class="sd-btn orange sm">Submit</button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn sm blue"</span><span class="gre">></span><span class="gre"></span>Favourite<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn lg</span></h2>
    <button class="sd-btn green-mate lg">Favorite</button>
    <button class="sd-btn red-mate lg">Send</button>
    <button class="sd-btn blue-mate lg">Profile</button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn lg green"</span><span class="gre">></span><span class="gre"></span>Profile<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <h2 class="sd-btn black sm"><span class="light">sd-icon</span></h2><button class="sd-icon yellow"><i class="material-icons">create</i></button><button class="sd-icon green"><i class="material-icons">call</i></button><button class="sd-icon red"><i class="material-icons">home</i></button><button class="sd-icon blue"><i class="material-icons">lock</i></button><br>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon black"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon red-mate"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">sd-icon circle</span></h2><button class="sd-icon circle blue"><i class="material-icons">face</i></button><button class="sd-icon circle red"><i class="material-icons">star</i></button><button class="sd-icon circle green"><i class="material-icons">lock</i></button><br>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon circle black"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon circle red-mate"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">sd-icon clear</span></h2>
    <button class="sd-icon clear"><i class="material-icons white">4k</i></button>
    <button class="sd-icon clear"><i class="material-icons red">favorite</i></button>
    <button class="sd-icon clear"><i class="material-icons blue">grade</i></button>
    <button class="sd-icon clear"><i class="material-icons green">thumb_up</i></button>
    <button class="sd-icon clear"><i class="material-icons purple">face</i></button>
    <button class="sd-icon clear"><i class="material-icons red-mate">add</i></button>
    <button class="sd-icon clear"><i class="material-icons yellow">cast</i></button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon clear"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons white"</span><span class="gre">></span>4k<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon clear"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons red"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">material-icons color</span></h2><i class="material-icons yellow">face</i><i class="material-icons blue">star</i></button><i class="material-icons green lg">lock</i><i class="material-icons red lg">flight</i><i class="material-icons yellow lg">cloud</i><i class="material-icons blue sm">face</i><i class="material-icons green sm">home</i><i class="material-icons white sm">folder</i><i class="material-icons black sm">folder</i>
    <p class="package">
    <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons blue"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons red"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">combine colors</span></h2><button class="sd-icon"><i class="material-icons red-mate">create</i></button><button class="sd-icon black"><i class="material-icons blue">invert_colors</i></button><button class="sd-icon"><i class="material-icons blue-mate">home</i></button><button class="sd-icon circle"><i class="material-icons red-mate">volume_up</i></button><button class="sd-icon circle"><i class="material-icons blue-mate">pause</i></button><button class="sd-icon circle red-mate"><i class="material-icons">play_arrow</i></button><br>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon black"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons green-mate"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons red-mate"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <div class="container" style="background-color: #292929;">
      <button class="sd-btn-mixr purple">Auth<i class="material-icons">lock</i></button>
      <button class="sd-btn">Submit</button>
      <button class="sd-btn red">Red</button>
      <button class="sd-icon blue"><i class="material-icons">add</i></button>
      <button class="sd-icon blue-mate"><i class="material-icons">folder</i></button>
      <button class="sd-icon green circle"><i class="material-icons">face</i></button>
      <button class="sd-btn red-mate">Red Mate</button>
      <button class="sd-icon orange circle"><i class="material-icons">pie_chart</i></button>
      <button class="sd-btn green">success</button>
      <button class="sd-btn-mix green"><i class="material-icons">folder</i>Success</button>
      <button class="sd-btn-mix blue" disabled><i class="material-icons">face</i>Disabled</button>
      <button class="sd-btn blue">Submit</button>
      <button class="sd-btn blue" disabled>Disabled</button>
      <button class="sd-btn blue-mate">Mate</button>
      <button class="sd-btn yellow">Yellow</button>
      <button class="sd-btn purple">Purple</button>
      <button class="sd-btn black">Black</button>
      <button class="sd-btn-mix black"><i class="material-icons">lock</i>Lock account</button>
      <button class="sd-btn orange">Orange</button>
      <button class="sd-btn-mix red sm"><i class="material-icons">close</i>Cancel payment</button>
      <button class="sd-btn-mix red lg"><i class="material-icons">lock</i>Lock</button>
      <button class="sd-btn-mix yellow"><i class="material-icons">warning</i>Warning message</button>
      <button class="sd-btn sm yellow">Yellow</button>
      <button class="sd-btn sm purple">Purple</button>
      <button class="sd-btn sm black">Black</button>
      <button class="sd-icon red lg"><i class="material-icons">face</i></button>
      <button class="sd-btn sm orange">Orange</button>
      <button class="sd-btn sm blue">Submit</button>
      <button class="sd-btn lg">White</button>
      <button class="sd-btn lg red">Red</button>
      <button class="sd-btn lg green">Green</button>
      <button class="sd-btn lg blue">Blue</button>
      <button class="sd-btn lg orange">ING</button>
      <button class="sd-btn red" disabled>Red</button>
      <button class="sd-btn" disabled>Disabled</button>
      <button class="sd-btn blue" disabled>Blue</button>
      <button class="sd-icon red circle"><i class="material-icons">close</i></button>
      <button class="sd-icon green"><i class="material-icons">home</i></button>
      <button class="sd-icon blue circle"><i class="material-icons">navigation</i></button>
      <button class="sd-icon green circle"><i class="material-icons">chevron_right</i></button>
      <button class="sd-icon green yellow circle"><i class="material-icons">public</i></button>
      <button class="sd-icon blue circle"><i class="material-icons">menu</i></button>  
      <button class="sd-icon green lg circle"><i class="material-icons">people</i></button>
      <button class="sd-icon blue lg"><i class="material-icons">flight</i></button>
      <button class="sd-icon green lg"><i class="material-icons">palette</i></button>
      <button class="sd-icon red lg"><i class="material-icons">timer</i></button>
      <button class="sd-icon red sm"><i class="material-icons">pie_chart</i></button>
      <button class="sd-icon red sm circle"><i class="material-icons">cloud_done</i></button>
      <button class="sd-icon yellow sm"><i class="material-icons">face</i></button>
      <button class="sd-btn">Apple</button>
      <button class="sd-btn red">Santander</button>
      <button class="sd-icon blue"><i class="material-icons">add</i></button>
      <button class="sd-icon blue sm"><i class="material-icons">menu</i></button>
      <button class="sd-icon blue-mate"><i class="material-icons">gps_fixed</i></button>
      <button class="sd-icon green circle"><i class="material-icons">face</i></button>
      <button class="sd-btn red-mate">Nestle</button>
      <button class="sd-icon red-mate circle"><i class="material-icons">audiotrack</i></button>
      <button class="sd-btn black">Black</button>
      <button class="sd-btn green">send</button>
      <button class="sd-icon blue lg"><i class="material-icons">menu</i></button>
      <button class="sd-btn-mix green"><i class="material-icons">flag</i>Country</button>
      <button class="sd-btn-mix blue"><i class="material-icons">cloud</i>Cloud</button>
      <button class="sd-btn orange">Art</button>
      <button class="sd-btn-mix red" disabled><i class="material-icons">face</i>Disabled</button>
      <button class="sd-btn blue">Submit</button>
      <button class="sd-btn yellow">Yellow</button>
      <button class="sd-btn-mix black"><i class="material-icons">lock</i>Lock account</button>
      <button class="sd-icon blue sm circle"><i class="material-icons">face</i></button>
      <button class="sd-btn black" disabled>Disabled</button>
      <button class="sd-icon green lg circle"><i class="material-icons">phone</i></button>
      <button class="sd-btn blue-mate">Display</button>
      <button class="sd-btn purple">Dates</button>
      <button class="sd-btn sm yellow">Yellow</button>
      <button class="sd-btn-mix yellow"><i class="material-icons">credit_card</i>Credit card</button>
      <button class="sd-btn sm purple">Example</button>
      <button class="sd-btn sm black">Dark</button>
      <button class="sd-btn-mix red sm"><i class="material-icons">archive</i>Inbox</button>
      <button class="sd-btn sm blue">Log in</button>
      <button class="sd-icon green"><i class="material-icons">home</i></button>
      <button class="sd-btn-mix red lg"><i class="material-icons">flight</i>Flight</button>
      <button class="sd-btn sm orange">Model Bank</button>
      <button class="sd-btn lg blue-mate">BBVA</button>
      <button class="sd-icon green sm circle"><i class="material-icons">home</i></button>
      <button class="sd-btn lg red">Ferrari</button>
      <button class="sd-btn" disabled>Disabled</button>
      <button class="sd-icon red lg"><i class="material-icons">face</i></button>
      <button class="sd-btn lg orange">Deploy</button>
      <button class="sd-btn blue" disabled>Blue</button>
      <button class="sd-icon green yellow circle"><i class="material-icons">expand_more</i></button>
      <button class="sd-icon blue circle"><i class="material-icons">remove</i></button>
      <button class="sd-icon yellow sm"><i class="material-icons">search</i></button>
      <button class="sd-icon green circle"><i class="material-icons">chevron_right</i></button>
      <button class="sd-btn red" disabled>Red</button>
      <button class="sd-btn lg green">Window</button>
      <button class="sd-icon red sm"><i class="material-icons">close</i></button>
      <button class="sd-icon red circle"><i class="material-icons">mouse</i></button>
      <button class="sd-icon blue"><i class="material-icons">casino</i></button>
      <button class="sd-icon blue sm circle"><i class="material-icons">cloud</i></button>
      <button class="sd-btn lg">Clear</button>
    </div>
  `);
