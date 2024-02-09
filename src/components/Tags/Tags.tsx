"use client"
import { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "@/src/lib/redux/store";
import { fetchTags } from "@/src/lib/redux/slices/TagSlice/TagSliceThunk";

export default function Tags() {
    const dispatch = useDispatch();
    const {tags, isError, error, isLoading} = useSelector((state) => state.tags);

    useEffect(() => {
        dispatch(fetchTags());
    }, [])

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {
                    tags?.map((tag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))
                }
            </div>
        </section>
    );
}
