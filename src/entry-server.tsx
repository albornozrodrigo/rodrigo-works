import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App.jsx';

export function render() {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
