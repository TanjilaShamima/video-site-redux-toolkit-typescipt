import { videoSlice } from "./slices/VideoSlice/VideoSlice";

export const rootReducer = {
    videos: videoSlice.reducer
}