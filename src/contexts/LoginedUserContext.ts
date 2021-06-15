import {createContext} from 'react';
import { USER_DATA } from '../models/UserData';

const LoginedUserContext = createContext<USER_DATA | null>(null);
export default LoginedUserContext;