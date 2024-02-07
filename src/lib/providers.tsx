"use client";

import { Provider, TypedUseSelectorHook } from "react-redux";
import { reduxStore } from "./redux/store";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { Action, ThunkAction } from "@reduxjs/toolkit";

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

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
