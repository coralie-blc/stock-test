import '@babel/polyfill';

import React from 'react';

import ReactDOM from 'react-dom';

import App from 'src/components/App';

const rootComponent = <App />;
const renderingArea = document.querySelector('#root');
ReactDOM.render(rootComponent, renderingArea);
