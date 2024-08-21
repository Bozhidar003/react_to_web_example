(function(e,t){typeof exports=="object"&&typeof module<"u"?t(require("react"),require("react-dom"),require("https://esm.sh/react-to-webcomponent@2.0.0")):typeof define=="function"&&define.amd?define(["react","react-dom","https://esm.sh/react-to-webcomponent@2.0.0"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.React,e.ReactDOM,e.reactToWebComponent))})(this,function(e,t,r){"use strict";const i=`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #1a1a1a;
    color: #ffffff;
  }
  .hello-world-container {
    font-family: Arial, sans-serif;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #2a2a2a;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    text-align: center;
    max-width: 300px;
    width: 100%;
  }
  .hello-world-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  .hello-world-button:hover {
    background-color: #45a049;
  }
  .click-info {
    font-size: 14px;
    color: #bbb;
    margin-top: 10px;
  }
  h2 {
    color: #4CAF50;
  }
`,c=r(({label:s="Hello",name:a="World",value:d="{}"})=>{const[l,p]=e.useState(0),[m,u]=e.useState(null);let n={};try{n=JSON.parse(d)}catch(o){console.error("Failed to parse value prop:",o)}const f=()=>{p(o=>o+1),u(new Date)},h=o=>o?o.toTimeString().split(" ")[0]:"";return e.createElement(e.Fragment,null,e.createElement("style",null,i),e.createElement("div",{className:"hello-world-container"},e.createElement("h2",null,s," ",a,"!"),e.createElement("button",{className:"hello-world-button",onClick:f},"Click Me"),e.createElement("p",{className:"click-info"},l>0?`Clicked ${l} times. Last one at ${h(m)}`:"Not clicked yet"),n&&n.message&&e.createElement("p",null,"Additional info: ",n.message)))},e,t);customElements.define("hello-world-component",c)});
