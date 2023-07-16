import {configureStore} from '@reduxjs/toolkit'
import { reducers } from './combineReducer'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'
import thunk from 'redux-thunk'

const percsistConfig = {
    key : 'root',
    storage
}

const percsistedReducer = persistReducer(percsistConfig,reducers)


export const store = configureStore({
    reducer : percsistedReducer,
    devTools : process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)