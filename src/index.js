import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//we have to destructure the files that aren't export default
//would be import { robots, cats } from "./robots" if more than one variable in the file
//import { robots } from "./robots" is moved to app.js

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
//can only return one thing

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
