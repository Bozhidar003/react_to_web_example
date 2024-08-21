import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './src/HelloWorld';

// We'll load reactToWebComponent dynamically
let reactToWebComponent;

async function initializeWebComponent() {
  if (!reactToWebComponent) {
    const module = await import('https://esm.sh/react-to-webcomponent@2.0.0');
    reactToWebComponent = module.default;
  }

  const HelloWorldWebComponent = reactToWebComponent(HelloWorld, React, ReactDOM, {
    shadow: true,
    props: ['label', 'name', 'value']
  });

  if (!customElements.get('hello-world-component')) {
    customElements.define('hello-world-component', HelloWorldWebComponent);
  }
}

initializeWebComponent();