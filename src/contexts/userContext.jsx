import { createContext, useState, useReducer } from "react";

//create context, (as the actula value we want to access)

export const UserContext = createContext({
    currentUser: null, 
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const { type, payload } = action;
    console.log(action)

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}
const INITIAL_STATE = {
    currentUser: null
}
export const UserProvider = ({ children }) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
};