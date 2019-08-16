import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import RootComponent from "./Root/RootComponent";
import {rootReducer, rootSaga} from "./Root/RootService";
import {Helmet} from "react-helmet";
import {GoogleFont, TypographyStyle} from "react-typography";
import Typography from 'typography';

const typography = new Typography({
    baseFontSize: "14px",
    headerFontFamily: ['Playfair Display', 'serif'],
    bodyFontFamily: ['Poppins', 'sans-serif'],
    googleFonts: [{
        name: 'Poppins',
        styles: ['400, 500']
    }, {
        name: 'Playfair Display',
        styles: ['300']
    }]
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Helmet>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#000000"/>
            <title>Tailor</title>
        </Helmet>
        <GoogleFont typography={typography}/>
        <TypographyStyle typography={typography}/>
        <RootComponent/>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
