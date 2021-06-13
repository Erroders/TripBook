import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomeLayout from './layouts/MainLayout';
import EditTrip from './views/EditTrip';
import Trip from './views/Trip';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={['/home', '/explore', '/add', '/notifications', '/profile']}>
                        <HomeLayout />
                    </Route>
                    <Route path="/user/:userId/:tripId" exact={true}>
                        <Trip />
                    </Route>
                    <Route path="/user/:userId/edit/:tripId" exact={true}>
                        <EditTrip />
                    </Route>
                    <Redirect from="/" to="/home" />
                    <Route />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
