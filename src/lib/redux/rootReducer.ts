import { filterSearchSlice } from "./slices/FilterSearchSlice/FilterSearchSlice";
import { relatedVideoSlice } from "./slices/RelatedVideoSlice/RelatedVideosSlice";
import { TagSlice } from "./slices/TagSlice/TagSlice";
import { VideoDetailsSlice } from "./slices/VideoDetailsSlice/VideoDetailsSlice";
import { videoSlice } from "./slices/VideoSlice/VideoSlice";

export const rootReducer = {
    videos: videoSlice.reducer,
    tags: TagSlice.reducer,
    videoDetails: VideoDetailsSlice.reducer,
    relatedVideos: relatedVideoSlice.reducer,
    filterSearch: filterSearchSlice.reducer,
}