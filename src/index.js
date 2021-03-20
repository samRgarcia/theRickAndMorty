import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import reducer from "./reducer";
import './index.css';
import 'antd/dist/antd.css';


const initialState = {
    result:[],
    resultCard:[],
    page:1,
    statusModal:false,
    infoPersonaje:{},
};
const store = createStore(reducer,initialState);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
