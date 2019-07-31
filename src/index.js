import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import About from './component/AboutUs'
import * as serviceWorker from './serviceWorker';
import {  BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import store from './store/index'

ReactDOM.render(

    <Provider store={store}>
        <div>
            <HashRouter>
                <Router>    
                    <Route exact path="/" component={App}>
                        <Route  path = "/about" component = {About}/>
                    </Route>
                </Router>
            </HashRouter>
        </div>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
