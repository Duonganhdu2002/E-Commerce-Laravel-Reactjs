import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import PopupChat from "./components/ui/PopupChat";
import { UserProvider } from './context/UserContext';
import Header from './components/ui/Header';
import SubFooter from './components/ui/Subfooter';
import Footer from './components/ui/Footer';
import MenuBar from './components/ui/MenuBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <Header />
      <MenuBar/>
      <App />
      <PopupChat />
      <SubFooter />
      <Footer />
    </BrowserRouter>
  </UserProvider>,
);
