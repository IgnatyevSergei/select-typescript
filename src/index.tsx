import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/app/App';
import {Provider} from "react-redux";
import './style.css'
import store from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


