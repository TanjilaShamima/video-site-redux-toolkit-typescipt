import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { getAllTags } from "./TagSliceAPI";

export const fetchTags = createAppAsyncThunk("tags/fetchTags", async() => {
    const tags = await getAllTags();
    return tags;
});