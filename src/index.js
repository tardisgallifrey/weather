import React from 'react';
import ReactDOM from 'react-dom/client';
import { InputZip } from './components/inputzip';
import './index.css';

const App = () => {

  return(
    <div>
      <div className="banner">
        <h1>
          Weather API testing
        </h1>
      </div>
      <div className="body">
        <h4>Get Current Weather</h4>
        <InputZip />
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

