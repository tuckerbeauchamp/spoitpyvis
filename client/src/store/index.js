import React, { createContext, useReducer, useContext, useMemo } from "react";
import combineReducers from "utils/combineReducers";
import { userReducer, userState } from "./user";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = combineReducers({
  user: userReducer,
});

const defaultState = {
  user: userState,
};

const StoreProvider = ({ value = defaultState, ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);
  const store = useMemo(() => [state, dispatch], [state]);

  return <Provider value={store} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
