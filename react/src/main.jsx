import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import PopupChat from "./components/ui/PopupChat";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <PopupChat/>
  </BrowserRouter>,
);
