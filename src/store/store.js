import { compose, legacy_createStore as createStore, applyMiddleware, legacy_createStore } from  'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';


const middleWares = [logger];

const persistConfig = {
    key: "root", 
    storage, 
    
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = legacy_createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
    );

export const persistor = persistStore(store);
