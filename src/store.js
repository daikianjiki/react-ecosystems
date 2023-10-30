import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { todos } from './todos/reducers'

const reducers = {
    todos
}

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers))

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV != 'production',
})

export default store
