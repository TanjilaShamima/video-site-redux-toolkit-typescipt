import { VideoType } from "@/src/lib/redux/slices/VideoSlice/VideoSlice";

interface Props {
  relatedVideo: VideoType;
}

export default function RelatedVideoListItem({relatedVideo}: Props) {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <a href={`/video-details/id=${relatedVideo.id}`}>
          <img
            src={relatedVideo.thumbnail}
            className="object-cover"
            alt={relatedVideo.title}
          />
        </a>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          {relatedVideo.duration}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <a href="#">
          <p className="text-slate-900 text-sm font-semibold">
            {relatedVideo.title}
          </p>
        </a>
        <a className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
          {relatedVideo.author}
        </a>
        <p className="text-gray-400 text-xs mt-1">{relatedVideo.views} views . {relatedVideo.date.toString()}</p>
      </div>
    </div>
  );
}
