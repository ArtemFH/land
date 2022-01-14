import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {StyledEngineProvider} from '@mui/material/styles';
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <StyledEngineProvider injectFirst>
                    <App/>
                </StyledEngineProvider>
            </BrowserRouter>

        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);