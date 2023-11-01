import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
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
    devTools: composeWithDevTools(applyMiddleware(thunk))
})

export default store
