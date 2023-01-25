import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {App} from './App';
import 'typeface-alegreya-sans-sc';
import 'typeface-aleo';
import 'typeface-ubuntu-condensed';
import 'typeface-ubuntu-mono';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
