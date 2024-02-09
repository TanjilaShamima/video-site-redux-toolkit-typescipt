import { createSlice } from "@reduxjs/toolkit";
import { VideoType } from "../VideoSlice/VideoSlice";
import { fetchSingleVideo } from "./VideoDetailsThunk";

//type
export type VideoStateType = {
  videoDetails: VideoType;
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: VideoStateType = {
  videoDetails: {} as VideoType,
  isLoading: false,
  isError: false,
  error: "",
};

export const VideoDetailsSlice = createSlice({
  name: "video-details-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleVideo.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.videoDetails = action.payload;
      })
      .addCase(fetchSingleVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.videoDetails = {} as VideoType;
        state.error = action.error?.message || "";
      });
  },
});
