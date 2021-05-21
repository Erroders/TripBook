import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomeLayout } from './layouts/HomeLayout';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/home" exact={true}>
                        <HomeLayout />
                    </Route>
                    <Redirect from="/" to="/home" />
                    <Route />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
