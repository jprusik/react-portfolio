import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'typeface-alegreya-sans-sc';
import 'typeface-aleo';
import 'typeface-ubuntu-condensed';
import 'typeface-ubuntu-mono';
import './index.scss';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
