import React, { createContext, useContext, useReducer } from "react";

//Data Layer to track cart functionality
export const StateContext = createContext();


//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// Pull information from the dataLayer

export const useStateValue = () => useContext(StateContext);
