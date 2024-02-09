import { TagType } from "@/src/lib/redux/slices/TagSlice/TagSlice";

interface Props {
    tag: TagType;
}

export default function Tag({ tag }: Props) {
    return (
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
            {tag.title}
        </div>
    );
}

{
    /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
