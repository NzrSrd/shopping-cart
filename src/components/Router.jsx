import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';

class Router extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={App}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;