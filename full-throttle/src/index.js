import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import $ from 'jquery';
// import './setupJquery';
// import 'owl.carousel/dist/owl.carousel.min.js'; // Make sure to import Owl Carousel's JS if needed
// import 'owl.carousel/dist/assets/owl.carousel.min.css'; // Import Owl Carousel's CSS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
