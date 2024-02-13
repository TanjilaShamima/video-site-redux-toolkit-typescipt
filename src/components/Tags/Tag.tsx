import {
  tagRemoving,
  tagSelection,
} from "@/src/lib/redux/slices/FilterSearchSlice/FilterSearchSlice";
import { TagType } from "@/src/lib/redux/slices/TagSlice/TagSlice";
import { useDispatch, useSelector } from "@/src/lib/redux/store";

interface Props {
  tag: TagType;
}

export default function Tag({ tag }: Props) {
  const dispatch = useDispatch();
  const { selectedTags } = useSelector((state) => state.filterSearch);

  const handleClick = () => {
    if (selectedTags.includes(tag.title)) {
      dispatch(tagRemoving(tag.title));
    } else {
      dispatch(tagSelection(tag.title));
    }
  };
  return (
    <div
      className={`${
        selectedTags.includes(tag.title)
          ? "bg-blue-600 text-white"
          : "bg-blue-100 text-blue-600"
      } px-4 py-1 rounded-full cursor-pointer`}
      onClick={handleClick}
    >
      {tag.title}
    </div>
  );
}

{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
