import { RelatedVideoProps } from "@/src/components/list/RelatedVideoList";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { getRelatedVideos } from "./RelatedVideosApi";

export const fetRelatedVideos = createAppAsyncThunk(
  "/videos/fetchRelatedVideos",
  async ({ id, tags }: RelatedVideoProps) => {
    const videos = await getRelatedVideos({ id, tags });
    return videos;
  }
);
