import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import VideoPlayer from "@/src/components/description/Player";
import VideoDescription from "@/src/components/description/VideoDescription";
import RelatedVideoList from "@/src/components/list/RelatedVideoList";
import React from "react";

const VideoDetailsPage = () => {
  return (
    <div>
      <Navbar />

      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer />

              <VideoDescription />
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
