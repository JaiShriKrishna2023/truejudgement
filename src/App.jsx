import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./components/layout";
import {Provider } from 'react-redux';
import store from './middleware/store/store'

const App = () => (
   <Fragment>
     <Provider store={store} > 
    <Layout/>
    </Provider>
   </Fragment>

);
ReactDOM.render(<App />, document.getElementById("app"));
