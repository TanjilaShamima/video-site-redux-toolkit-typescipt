import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { getAllVideos } from "./VideoSliceAPI";

export const fetchVideos = createAppAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const videos = await getAllVideos();
    return videos;
  }
);
