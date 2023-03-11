import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import './main.scss';


import axios from 'axios';
import { notification } from 'antd';


//HANDLE GLOBAL ERROR token expired
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
// axios.interceptors.response.use((response) => response, (error) => {
//   // whatever you want to do with the error
//   console.log(error.response)
//   if (error.response.status === 401) { //token expired
//     notification.error({
//       message: `Error ${error?.response?.status}`,
//       description:
//         'Silahkan login kembali!!',
//     });
//     localStorage.clear()
//     window.location.href = '/expired'
//   }
//   throw error;
// });

//HANDLE GLOBAL ERROR token expired
axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
axios.interceptors.response.use((response) => response, (error) => {
  // whatever you want to do with the error
  console.log(error, 'here')
  if (error) {
    notification.error({
      message: `Error fetching data`,
      description:
        '',
    });
    console.log('error fetch data!')
    // localStorage.clear()
    // window.location.href = '/expired'
  }
  throw error;
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
