interface Props {
  likes: string;
  unLikes: string;
}

export default function LikeUnlike(props: Props) {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src="/images/like.svg" alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{props.likes}</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src="/images/unlike.svg" alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{props.unLikes}</div>
      </div>
    </div>
  );
}
