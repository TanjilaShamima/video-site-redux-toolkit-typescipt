import { createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "./TagSliceThunk";

//Types
export type TagType = {
    id: number;
    title: string;
}

export type TagsStateType = {
    tags: TagType[];
    isLoading: boolean;
    isError: boolean;
    error: string;
}

const initialState: TagsStateType = {
    tags: [],
    isLoading: false,
    isError: false,
    error: "",
}

export const TagSlice = createSlice({
    name: "tag-slice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTags.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchTags.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.tags = action.payload;
        })
        .addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.tags = [];
            state.error = action.error?.message || '';
        })
    }
})