import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { getAllVideos } from "./VideoSliceAPI";
//type
export type VideoProps = {
  tags: string[];
  search: string;
};

export const fetchVideos = createAppAsyncThunk(
  "videos/fetchVideos",
  async ({tags, search}: VideoProps) => {
    const videos = await getAllVideos(tags, search);
    return videos;
  }
);
