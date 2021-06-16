import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { USER_DATA } from '../models/UserData';

interface LoginInterface {
    user: USER_DATA | null;
    setUser?: Dispatch<SetStateAction<USER_DATA | null>>;
}

const LoginedUserContext = createContext<LoginInterface>({ user: null });

export function useUserContext(){
  return useContext(LoginedUserContext)
}

export default LoginedUserContext;
