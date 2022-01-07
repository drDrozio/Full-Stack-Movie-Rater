import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from './components/header'
import Footer from './components/footer'

const context = React.createContext();
export const CtxConsumer = context.Consumer;

const names = ['Ishan','Manas','Ram']

const routing = (
  <BrowserRouter>
    <div>
      <context.Provider value={{names:names}}>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </context.Provider>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
