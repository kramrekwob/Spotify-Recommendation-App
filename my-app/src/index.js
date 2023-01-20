import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './luxbootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HowPage from './HowPage';
import WhyPage from './WhyPage';
import MyNavbar from './MyNavbar';
import TrackAnalysisPage from './TrackAnalysisPage';
import Code from './Code';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <MyNavbar></MyNavbar>
  <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/how" element={<HowPage />} />
      <Route path="/why" element={<WhyPage />} />
      <Route path="/code" element={<Code />} />
      <Route path="/analyze" element={<TrackAnalysisPage />} />
      </Routes>
  </BrowserRouter>
  <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
