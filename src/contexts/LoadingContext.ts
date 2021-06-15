import {createContext, Dispatch, SetStateAction} from 'react';

interface LoadingInterface{
  loading : boolean;
  setLoading ?: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingInterface>({loading: true});
export default LoadingContext;