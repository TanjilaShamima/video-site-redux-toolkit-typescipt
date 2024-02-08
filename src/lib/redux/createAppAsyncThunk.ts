import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReduxDispatchType, ReduxStateType } from "../providers";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: ReduxStateType;
    dispatch: ReduxDispatchType;
    rejectValue: string;
}>();