import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { applyMiddleware,createStore } from 'redux';
import rootReducer from './store/reducers';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";


 const store = createStore(rootReducer,applyMiddleware(thunk))


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>

  
    <App />
    </Provider>

);


