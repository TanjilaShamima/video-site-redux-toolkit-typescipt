import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "./VideoSliceThunk";

// Types
export interface VideoType {
  id: number;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
  tags: string[];
  likes: number;
  unLikes: number;
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
        builder
        .addCase(fetchVideos.pending, (state) => {
          state.isError = false;
          state.isLoadingLing = true;
        })
        .addCase(fetchVideos.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoadingLing = false;
          state.videos = action.payload;
        })
        .addCase(fetchVideos.rejected, (state, action) => {
          state.isLoadingLing = false;
          state.isError = true;
          state.videos = [];
          state.error = action.error?.message || '';
        })
    }
})
