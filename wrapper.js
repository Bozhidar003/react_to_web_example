import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'https://esm.sh/react-to-webcomponent@2.0.0';
import HelloWorld from './src/HelloWorld';

const HelloWorldWebComponent = reactToWebComponent(HelloWorld, React, ReactDOM, {
  shadow: true,
  props: ['label', 'name', 'value']
});

if (!customElements.get('hello-world-component')) {
  customElements.define('hello-world-component', HelloWorldWebComponent);
}

export default HelloWorldWebComponent;