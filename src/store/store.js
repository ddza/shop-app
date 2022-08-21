import { compose, legacy_createStore as createStore, applyMiddleware, legacy_createStore } from  'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

//[].filter(Boolean) -> will remove anything that's got false, if it is true we will get the logger
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

const persistConfig = {
    key: "root", 
    storage, 
    
}

const composedEnhancer = (
    process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__) ||
    compose;

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = legacy_createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
    );

export const persistor = persistStore(store);
