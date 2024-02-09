import LikeUnlike from "./LikeUnlike";

interface Props {
  title: string;
  date: string;
  likes: string;
  unLikes: string;
  description: string
}

export default function VideoDescription(props: Props) {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {props.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {props.date}
        </h2>

        <LikeUnlike likes={props.likes} unLikes={props.unLikes} />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {props.description}
      </div>
    </div>
  );
}
