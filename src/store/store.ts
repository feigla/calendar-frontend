import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {reducers} from './index'

const rootReducer = combineReducers(reducers)

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']