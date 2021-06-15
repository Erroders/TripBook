import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CreateTrip from './components/AddTrip/CreateTrip';
import LoadingContext from './contexts/LoadingContext';
import LoginedUserContext from './contexts/LoginedUserContext';
import UserProfile from './views/UserProfile';
import HomeFeed from './views/HomeFeed';
import AddView from './views/AddView';
import Explore from './views/Explore';
import Notifications from './views/Notifications';
import Followers from './views/Followers';
import Followings from './views/Followings';
import EditTrip from './views/EditTrip';
import Trip from './views/Trip';
import { USER_DATA } from './models/UserData';
import { auth } from './utils/firebase/firebase';
import LoginPage from './layouts/LoginPage';
import EditProfile from './views/EditProfile';

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, _setUser] = useState<USER_DATA | null>(null);

    useEffect(() => {
        console.log('user', user);
        const unsubscribe = auth.onAuthStateChanged((_user) => {
            console.log(_user);
        });
        return unsubscribe;
    }, [user]);

    return (
        <LoginedUserContext.Provider value={user}>
            <LoadingContext.Provider value={{ loading, setLoading }}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/login'}>
                            <LoginPage />
                        </Route>
                        <Route path={'/home'}>
                            <HomeFeed />
                        </Route>
                        <Route path={'/add'}>
                            <AddView />
                        </Route>
                        <Route path={'/notifications'}>
                            <Notifications />
                        </Route>
                        <Route path={'/explore'}>
                            <Explore />
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
                        <Route path="/profile/" exact={true}>
                            <UserProfile />
                        </Route>
                        <Route path="/editProfile/" exact={true}>
                            <EditProfile />
                        </Route>
                        <Route path="/profile/:userId/followers" exact={true}>
                            <Followers />
                        </Route>
                        <Route path="/profile/:userId/followings" exact={true}>
                            <Followings />
                        </Route>
                        <Redirect from="/" to="/home" />
                        <Route />
                    </Switch>
                </BrowserRouter>
            </LoadingContext.Provider>
        </LoginedUserContext.Provider>
    );
};

export default App;
