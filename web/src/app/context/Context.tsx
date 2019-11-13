import React, { createContext, useContext, useReducer } from 'react';

var a: any;
export const StateContext = createContext(a);

export const StateProvider = ({ children, accountInfo }: any) => {
    return (
    <StateContext.Provider 
        //initial reducer values
        value={useReducer(appReducer, {
            authentificated: true,
            accountInfo: {
                userName: accountInfo.userName,
                name: accountInfo.name
            }
        })}    
    >
        {children}
    </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);

//reducer
export interface IAppState {
    authentificated: boolean;
    accountInfo: {
        userName: string,
        name: string
    };
}

export const appState = {
    authentificated: false,
    accountInfo: {}
};

export enum EReducerActions {
}

export const appReducer = (state: IAppState, action: {
    type: EReducerActions,
    payload: any
}) => {
    switch (action.type) {
        default:
            return state;
    }
};