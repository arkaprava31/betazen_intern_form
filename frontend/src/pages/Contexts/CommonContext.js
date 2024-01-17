import { createContext, useContext, useReducer } from 'react';
import commonReducer from '../form/Reducers/CommonReducer';

const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commonReducer, {});

  return (
    <CommonContext.Provider value={{ state, dispatch }}>
      {children}
    </CommonContext.Provider>
  );
};

export const useCommonContext = () => {
  const context = useContext(CommonContext);
  if (!context) {
    throw new Error('useCommonContext must be used within a CommonProvider');
  }
  return context;
};
