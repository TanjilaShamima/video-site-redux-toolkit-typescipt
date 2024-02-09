import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { getVideoDetails } from "./VideoDetailsAPI";

export const fetchSingleVideo = createAppAsyncThunk("video-details/fetchSingleVideo", async (id: number) => {
    const video = await getVideoDetails(id);
    return video;
});