import React, { createContext, useReducer, useContext } from "react";

//Prepares DataLayer
export const StateContext = createContext();

//wrap our app and provide the DataLayer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from Datalayer
export const useStateValue = () => useContext(StateContext);
