import React, { useState } from 'react';
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
import PrivateRoute from './components/Route/PrivateRoute';
import LoginPage from './views/LoginPage';
import EditProfile from './views/EditProfile';

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<USER_DATA | null>(null);

    auth.onAuthStateChanged((_user) => {
        _user ? '' : setUser(null);
    });

    return (
        <LoginedUserContext.Provider value={{ user, setUser }}>
            <LoadingContext.Provider value={{ loading, setLoading }}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/login'}>
                            <LoginPage />
                        </Route>
                        <PrivateRoute path={'/home'} exact={true} component={HomeFeed} />
                        <PrivateRoute path={'/add'} component={AddView} exact={true} />
                        <PrivateRoute path={'/notifications'} component={Notifications} exact={true} />
                        <PrivateRoute path={'/explore'} component={Explore} exact={true} />
                        <PrivateRoute path="/user/:userId/:tripId" exact={true} component={Trip} />
                        <PrivateRoute path="/user/:userId/edit/:tripId/:index" exact={true} component={EditTrip}>
                            <EditTrip />
                        </PrivateRoute>
                        <PrivateRoute path="/createTrip" exact={true} component={CreateTrip} />
                        <PrivateRoute path="/profile/:userId" exact={true} component={UserProfile} />
                        <PrivateRoute path="/editProfile" exact={true} component={EditProfile} />
                        <PrivateRoute path="/profile/:userId/followers" exact={true} component={Followers} />
                        <PrivateRoute path="/profile/:userId/followings" exact={true} component={Followings} />

                        <Redirect from="/" to="/home" />
                        <Route />
                    </Switch>
                </BrowserRouter>
            </LoadingContext.Provider>
        </LoginedUserContext.Provider>
    );
};

export default App;
