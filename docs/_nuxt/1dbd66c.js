(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{211:function(t,e,o){"use strict";o.r(e),o.d(e,"pageInit",(function(){return l}));var n=o(213),r=o.n(n),l=(o(214),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),function(){var menu=document.querySelector(".menu-bar");menu&&menu.classList.remove("show"),document.querySelector(".section-container").scrollTo({top:0,behavior:"smooth"}),r.a.highlightAll()})},238:function(t,e,o){"use strict";o.r(e);var n=o(212);class r extends n.a{static get styles(){return[n.b`
        :host {
          display: inline-block;
          position: relative;
        }

        .dropdown {
          position: relative;
          height: 0;
          max-height: 0;
          overflow: hidden;
          z-index: 888;
          font-size: 15px;
          color: black;
        }

        ::slotted(div) {
          display: flex;
          flex-direction: column;
        }

        ::slotted(p) {
          margin: 0;
          padding: 15px;
        }

        .house {
          max-width: 250px;
        }
      `]}static get properties(){return{position:{type:String},maxWidth:{type:String},backgroundColor:{type:String},clickout:{type:Boolean},collapse:{type:Boolean},rotate:{type:Boolean}}}constructor(){super(),this.backgroundColor="white",this.rotate=!1,this.collapse=!1,this.clickout=!1}rotateIcon(t){const e=this.slotted.assignedNodes()[0].querySelector("i");this.rotate&&e&&(e.style.transition="transform .2s ease-in",e.style.transform=`rotate(${t}deg)`)}setDropdown(){const t="auto"===this.dropdown.style.height;this.dropdown.style.height=t?"unset":"auto",this.dropdown.style.maxHeight=t?"0":"600px",this.rotateIcon(t?"0":"180")}setCollapse(t){this.dispatchEvent(new CustomEvent("set-collapse",{bubbles:!0,composed:!0,detail:{event:t}}))}dropdownClickListener(){if(this.clickout){const t=this.dropdown,e=this.rotateIcon.bind(this),button=this.slotted.assignedNodes()[0];document.addEventListener("click",(function(o){"BUTTON"===o.target.tagName&&o.target.id===button.id||"content"===o.target.className||(t.style.height="unset",t.style.maxHeight="0",e("0"))}))}}firstUpdated(){this.dropdown=this.shadowRoot.querySelector(".dropdown"),this.slotted=this.shadowRoot.querySelector("slot[name=button]"),this.dropdownClickListener()}render(){return n.c`
      <slot name="button" @click='${this.collapse?this.setCollapse:this.setDropdown}'></slot>
      <div class="dropdown"
           style="position: ${this.position?this.position:this.collapse?"relative":"absolute"};
                  max-width: ${this.maxWidth?`${this.maxWidth}px`:"unset"};
                  background-color: ${this.backgroundColor};">
        <slot name="content"></slot>
      </div>
    `}}window.customElements.define("seed-dropdown",r);const l="600px",d=time=>({transition:`max-height ${time}s cubic-bezier(0, 1, 0, 1)`,height:"unset",maxHeight:"0"}),c=({dropdown:t,values:e})=>{t.style.transition=e.transition,t.style.height=e.height,t.style.maxHeight=e.maxHeight},v=({component:component,element:element})=>{const t=component.shadowRoot.querySelector(".dropdown");return{dropdown:t,isClosed:element===t,isOpened:t.style.maxHeight===l}},m=({component:component,list:t,time:time})=>{const e=component.target.shadowRoot.querySelector(".dropdown");e.style.maxHeight===l?(c({dropdown:e,values:d(time)}),component.target.rotateIcon("0")):(({list:t,element:element,time:time})=>{let e=0,o=0;t.forEach((component=>{const{dropdown:t,isClosed:n,isOpened:r}=v({component:component,element:element});r&&(o=t.scrollHeight),n&&(e=t.scrollHeight)})),t.forEach((component=>{const{dropdown:t,isClosed:n,isOpened:r}=v({component:component,element:element});if(r&&(c({dropdown:t,values:d(time)}),component.rotateIcon("0")),n){const n="0"!==time;c({dropdown:t,values:{transition:o>0&&n?`max-height ${o/e}s linear`:`max-height ${time}s ease-in-out`,height:"auto",maxHeight:l}}),component.rotateIcon("180")}}))})({list:t,element:e,time:time})};class h extends n.a{static get styles(){return[n.b`
        :host {
          display: flex;
          flex-direction: column;
          flex: auto;
        }
      `]}static get properties(){return{basic:{type:Boolean}}}constructor(){super(),this.basic=!1}getDropdownList(){const t=this.querySelectorAll("seed-dropdown");let e=this.querySelector("slot:not([name])");return e=e?e.assignedElements():[],t.length>0?t:e.length>0?e:[]}setCollapseUtils(){const t=this.getDropdownList();if(t.length>0){t.forEach((t=>{t.collapse=!0}));const e=t.length>1;this.shadowRoot.addEventListener("set-collapse",(component=>{m({component:component,list:t,time:this.basic?"0":e?"1":".8"})}))}}firstUpdated(){this.setCollapseUtils()}render(){return n.c`<slot></slot>`}}window.customElements.define("seed-collapse",h);var _=o(211),w={layout:"seed",mounted:function(){Object(_.pageInit)()}},x=o(11),f=Object(x.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"title"},[t._v("Dropdown")]),t._v(" "),t._m(0),t._v(" "),o("pre",[o("code",{staticClass:"language-bash"},[t._v(t._s("npm i @seed-catalog/dropdown"))])]),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Import")]),t._v(" "),o("pre",[o("code",{staticClass:"language-js"},[t._v(t._s("import '@seed-catalog/dropdown';"))])]),t._v(" "),o("p",{staticClass:"info-text sm mt",attrs:{tabindex:"0"}},[t._v("Properties and attributes")]),t._v(" "),t._m(1),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Accordion")]),t._v(" "),o("pre",[o("code",{staticClass:"language-bash"},[t._v(t._s("npm i @seed-catalog/collapse"))])]),t._v(" "),o("pre",[o("code",{staticClass:"language-js"},[t._v(t._s("import '@seed-catalog/collapse';"))])]),t._v(" "),t._m(3),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Custom")]),t._v(" "),t._m(4),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Examples")]),t._v(" "),o("seed-dropdown",{attrs:{position:"relative"}},[o("button",{attrs:{slot:"button"},slot:"button"},[t._v("Relative dropdown")]),t._v(" "),o("p",{attrs:{slot:"content"},slot:"content"},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,\n    eget viverra diam. Donec euismod mattis dignissim.\n  ")])]),t._v(" "),o("seed-dropdown",[o("button",{attrs:{slot:"button"},slot:"button"},[t._v("Default")]),t._v(" "),o("div",{staticStyle:{width:"200px"},attrs:{slot:"content"},slot:"content"},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,\n    eget viverra diam. Donec euismod mattis dignissim.\n  ")])]),t._v(" "),o("seed-dropdown",{attrs:{clickout:""}},[o("button",{attrs:{slot:"button"},slot:"button"},[t._v("Clickout")]),t._v(" "),o("div",{staticStyle:{width:"200px"},attrs:{slot:"content"},slot:"content"},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,\n    eget viverra diam. Donec euismod mattis dignissim.\n  ")])]),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Accordion")]),t._v(" "),o("seed-collapse",{attrs:{basic:""}},[o("seed-dropdown",{attrs:{position:"relative"}},[o("button",{attrs:{slot:"button"},slot:"button"},[t._v("Accordion")]),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,\n    eget viverra diam. Donec euismod mattis dignissim.\n  ")])]),t._v(" "),o("seed-dropdown",{attrs:{position:"relative"}},[o("button",{attrs:{slot:"button"},slot:"button"},[t._v("Accordion")]),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,\n    eget viverra diam. Donec euismod mattis dignissim.\n  ")])]),t._v(" "),o("seed-dropdown",{attrs:{position:"relative"}},[o("button",{attrs:{slot:"button"},slot:"button"},[t._v("Accordion")]),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,\n    eget viverra diam. Donec euismod mattis dignissim.\n  ")])])],1)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Install via "),o("a",{attrs:{href:"https://www.npmjs.com/package/@seed-catalog/dropdown",target:"_blank"}},[t._v("npm")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb"},[o("p",{staticClass:"info-text sm"},[o("span",{staticClass:"prop-light"},[t._v("clickout")]),t._v(": type Boolean")]),t._v(" "),o("p",{staticClass:"info-text sm"},[o("span",{staticClass:"prop-light"},[t._v("maxWidth")]),t._v(": type String")]),t._v(" "),o("p",{staticClass:"info-text sm"},[o("span",{staticClass:"prop-light"},[t._v("position")]),t._v(": type String")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pre",{staticClass:"line-numbers language-markup"},[o("code",[t._v("<seed-dropdown relative>")]),t._v("\n  "),o("code",[t._v('<button slot="button">')]),t._v("Open dropdown"),o("code",[t._v("</button>")]),t._v("\n  "),o("code",[t._v('<div slot="content">')]),t._v("\n    ...\n  "),o("code",[t._v("</div>")]),t._v("\n"),o("code",[t._v("</seed-dropdown>")]),t._v("\n")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pre",{staticClass:"line-numbers language-markup"},[o("code",[t._v("<seed-collapse basic>")]),t._v("\n  "),o("code",[t._v("<seed-dropdown relative>")]),t._v("\n    "),o("code",[t._v('<button slot="button">')]),t._v("Open dropdown"),o("code",[t._v("</button>")]),t._v("\n    "),o("code",[t._v('<div slot="content">')]),t._v("\n      ...\n    "),o("code",[t._v("</div>")]),t._v("\n  "),o("code",[t._v("</seed-dropdown>")]),t._v("\n"),o("code",[t._v("</seed-collapse>")]),t._v("\n")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pre",{staticClass:"line-numbers language-markup"},[o("code",[t._v('<seed-dropdown clickout maxWidth="300" position="relative">')]),o("code",[t._v("</seed-dropdown>")]),t._v("\n")])}],!1,null,null,null);e.default=f.exports}}]);