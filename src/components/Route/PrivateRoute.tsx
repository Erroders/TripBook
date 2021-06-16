import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../utils/firebase/firebase';

interface IPrivateProps {
    component: React.FC;
    path: string;
    exact: boolean;
}

const PrivateRoute: React.FC<IPrivateProps> = ({ component, path, exact }: IPrivateProps) => {
    return auth.currentUser ? <Route path={path} exact={exact} component={component} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
