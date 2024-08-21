import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'https://esm.sh/react-to-webcomponent@2.0.0';

// Import your React component using the correct path
import HelloWorld from './src/HelloWorld';  // Adjust this path as needed

// Convert React component to Web Component
const HelloWorldWebComponent = reactToWebComponent(HelloWorld, React, ReactDOM);

// Define the custom element
customElements.define('hello-world-component', HelloWorldWebComponent);