import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
  } from "react-redux";
  import { Action, ThunkAction } from "@reduxjs/toolkit";


export const reduxStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export const useDispatch = () => useReduxDispatch<ReduxDispatchType>();
export const useSelector: TypedUseSelectorHook<ReduxStateType> = useReduxSelector;


// Types
export type ReduxStoreType = typeof reduxStore;
export type ReduxStateType = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatchType = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void>  = ThunkAction<
ReturnType,
ReduxStateType,
unknown,
Action
>;


