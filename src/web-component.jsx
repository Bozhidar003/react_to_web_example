import ReactDOM from "react-dom/client";
import HelloWorld from "./components/HelloWorld";

export const normalizeAttribute = (attribute) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class HelloWorldWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    const root = ReactDOM.createRoot(this.shadowRoot);
    root.render(<HelloWorld {...props} />);
  }

  getPropsFromAttributes() {
    const props = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }

    return props;
  }
}

export default HelloWorldWebComponent;
