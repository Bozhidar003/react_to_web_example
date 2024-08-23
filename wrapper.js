import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import HelloWorld from './src/HelloWorld.jsx';

// Ensure process.env is defined
if (typeof process === 'undefined') {
  window.process = { env: { NODE_ENV: 'development' } };
}

const HelloWorldWebComponent = reactToWebComponent(HelloWorld, React, ReactDOM, {
  shadow: true,
  props: ['label', 'name', 'value']
});

if (!customElements.get('hello-world-component')) {
  customElements.define('hello-world-component', HelloWorldWebComponent);
}