import { configureStore } from '@reduxjs/toolkit'
import { todos } from './todos/reducers'

const reducers = {
    todos
}

const store = configureStore({
    reducer: reducers
})

export default store
