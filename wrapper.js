import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import HelloWorld from './src/HelloWorld';

console.log('React:', React);
console.log('ReactDOM:', ReactDOM);
console.log('reactToWebComponent:', reactToWebComponent);
console.log('HelloWorld:', HelloWorld);

const HelloWorldWebComponent = reactToWebComponent(HelloWorld, React, ReactDOM, {
  shadow: true,
  props: ['label', 'name', 'value']
});

customElements.define('hello-world-component', HelloWorldWebComponent);