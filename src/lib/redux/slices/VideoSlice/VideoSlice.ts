import { createSlice } from "@reduxjs/toolkit";

// Types
export interface VideoType {

}

export interface VideosStateType {
  videos: VideoType[];
  isLoadingLing: boolean;
  isError: boolean;
  error: string;
}

const initialState: VideosStateType = {
  videos: [],
  isLoadingLing: false,
  isError: false,
  error: "",
};

export const videoSlice = createSlice({
    name: "video-slice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase()
    }
})
