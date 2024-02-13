import { createSlice } from "@reduxjs/toolkit";

//type
type StateType = {
    search: string,
    selectedTags: string[],
}


const initialState: StateType = {
    search: "",
    selectedTags: [],
}


export const filterSearchSlice = createSlice({
    name: "filterSearchSlice",
    initialState,
    reducers: {
        tagSelection: (state, action) => {
            state.selectedTags.push(action.payload);
        },
        tagRemoving: (state, action) => {
            state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload);
        },
        searching: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const {tagSelection, tagRemoving, searching} = filterSearchSlice.actions;