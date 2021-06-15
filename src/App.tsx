import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CreateTrip from './components/AddTrip/CreateTrip';
import HomeLayout from './layouts/MainLayout';
import EditTrip from './views/EditTrip';
import Trip from './views/Trip';
import LoadingContext from './contexts/LoadingContext';
import LoginedUserContext from './contexts/LoginedUserContext';
import { USER_DATA } from './models/UserData';

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, _setUser] = useState<USER_DATA | null>(null);

    return (
        <>
            <LoginedUserContext.Provider value={user}>
                <LoadingContext.Provider value={{ loading, setLoading }}>
                    <BrowserRouter>
                        <Switch>
                            <Route path={['/home', '/explore', '/add', '/notifications', '/profile']}>
                                <HomeLayout />
                            </Route>
                            <Route path="/user/:userId/:tripId" exact={true}>
                                <Trip />
                            </Route>
                            <Route path="/user/:userId/edit/:tripId/:index" exact={true}>
                                <EditTrip />
                            </Route>
                            <Route path="/createTrip" exact={true}>
                                <CreateTrip />
                            </Route>
                            <Redirect from="/" to="/home" />
                            <Route />
                        </Switch>
                    </BrowserRouter>
                </LoadingContext.Provider>
            </LoginedUserContext.Provider>
        </>
    );
};

export default App;
