import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomeLayout from './layouts/MainLayout';
import Trip from './views/Trip';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/home" exact={true}>
                        <HomeLayout />
                    </Route>
                    <Route path="/:user/:tripId" exact={true}>
                        <Trip />
                    </Route>
                    <Redirect from="/" to="/home" />
                    <Route />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
