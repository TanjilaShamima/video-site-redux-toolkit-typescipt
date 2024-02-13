'use client';
import { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "@/src/lib/redux/store";
import { fetRelatedVideos } from "@/src/lib/redux/slices/RelatedVideoSlice/RelatedVideoThunk";

export interface RelatedVideoProps {
  id: number;
  tags: string[];
}

export default function RelatedVideoList(props: RelatedVideoProps){
  const dispatch = useDispatch();
  const {relatedVideos, isError, isLoading, error} = useSelector((state) => state.relatedVideos);



  useEffect(() => {
    dispatch(fetRelatedVideos({id: props.id, tags: props.tags}))
  }, [dispatch, props.id, props.tags]);


  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {
        relatedVideos?.map(relatedVideo => {
          return (
            <RelatedVideoListItem
              key={relatedVideo.id}
              relatedVideo={relatedVideo}
            />
          )
        
        })
      }
    </div>
  );
}
