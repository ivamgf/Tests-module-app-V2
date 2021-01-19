import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/Main';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Record from './pages/record/Record';
import Register from './pages/register/Register';
import Error404 from './pages/error404/Error404';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/record" component={Record} />
            <Route path="/register" component={Register} />
            <Route path="*" component={Error404} />
        </Switch>
    </BrowserRouter>
);

export default Routes;