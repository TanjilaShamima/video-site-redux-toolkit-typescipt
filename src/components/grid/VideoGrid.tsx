"use client";

import VideoGridItem from "./VideoGridItem";
import { ReduxStateType, useDispatch, useSelector } from "@/src/lib/providers";
import { useEffect } from "react";
import { fetchVideos } from "@/src/lib/redux/slices/VideoSlice/VideoSliceThunk";
import { videoSlice } from "@/src/lib/redux/slices/VideoSlice/VideoSlice";
import Loader from "../common/Loader";

export default function VideGrid() {
  const { videos, isError, isLoadingLing, error } = useSelector(
    (state) => state.videos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  console.log("videos", videos);
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {videos?.length > 0 ? (
            videos.map((video) => (
              <VideoGridItem key={video.id} video={video} />
            ))
          ) : (
            <Loader />
          )}

          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
}
