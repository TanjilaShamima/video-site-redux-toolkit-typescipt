import { createSlice } from "@reduxjs/toolkit";
import { fetRelatedVideos } from "./RelatedVideoThunk";
import { VideoType } from "../VideoSlice/VideoSlice";

type StateType = {
  relatedVideos: VideoType[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: StateType = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const relatedVideoSlice = createSlice({
  name: "relatedVideoSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || '';
      });
  },
});
