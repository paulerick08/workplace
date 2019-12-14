import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';

ReactDOM.render(
    <Router>
        <App />
        
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
        </Switch>
    </Router>, 
document.getElementById('root'));