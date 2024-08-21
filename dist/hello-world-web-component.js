import e, { useState as n } from "react";
import u from "react-dom";
import b from "https://esm.sh/react-to-webcomponent@2.0.0";
const f = `
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
`, x = ({ label: r = "Hello", name: a = "World", value: c = "{}" }) => {
  const [l, i] = n(0), [s, d] = n(null);
  let t = {};
  try {
    t = JSON.parse(c);
  } catch (o) {
    console.error("Failed to parse value prop:", o);
  }
  const m = () => {
    i((o) => o + 1), d(/* @__PURE__ */ new Date());
  }, p = (o) => o ? o.toTimeString().split(" ")[0] : "";
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("style", null, f), /* @__PURE__ */ e.createElement("div", { className: "hello-world-container" }, /* @__PURE__ */ e.createElement("h2", null, r, " ", a, "!"), /* @__PURE__ */ e.createElement("button", { className: "hello-world-button", onClick: m }, "Click Me"), /* @__PURE__ */ e.createElement("p", { className: "click-info" }, l > 0 ? `Clicked ${l} times. Last one at ${p(s)}` : "Not clicked yet"), t && t.message && /* @__PURE__ */ e.createElement("p", null, "Additional info: ", t.message)));
}, g = b(x, e, u);
customElements.define("hello-world-component", g);
