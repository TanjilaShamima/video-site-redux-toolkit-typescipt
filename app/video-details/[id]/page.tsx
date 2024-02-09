"use client";
import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import VideoPlayer from "@/src/components/description/Player";
import VideoDescription from "@/src/components/description/VideoDescription";
import RelatedVideoList from "@/src/components/list/RelatedVideoList";
import { fetchSingleVideo } from "@/src/lib/redux/slices/VideoDetailsSlice/VideoDetailsThunk";
import { useDispatch, useSelector } from "@/src/lib/redux/store";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const VideoDetailsPage = () => {
  const params = useParams();
  const id = String(params.id).split("%3D")[1];
  const dispatch = useDispatch();
  const { videoDetails, isLoading, isError, error } = useSelector(
    (state) => state.videoDetails
  );
  console.log("video", videoDetails);

  useEffect(() => {
    dispatch(fetchSingleVideo(Number(id)));
  }, []);

  return (
    <div>
      <Navbar />

      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer
                title={videoDetails?.title}
                thumbnail={videoDetails?.thumbnail}
              />

              <VideoDescription
                title={videoDetails.title}
                description={videoDetails.description}
                likes={videoDetails.likes}
                unLikes={videoDetails.unLikes}
                date={videoDetails.date}
              />
            </div>

            <RelatedVideoList />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoDetailsPage;
