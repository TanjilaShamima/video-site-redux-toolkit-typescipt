import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReduxDispatchType, ReduxStateType } from "./store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: ReduxStateType;
    dispatch: ReduxDispatchType;
    rejectValue: string;
}>();