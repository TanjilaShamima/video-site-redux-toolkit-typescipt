import { RelatedVideoProps } from "@/src/components/list/RelatedVideoList";
import axiosInstance from "@/src/networks/NetworksAPI";

export const getRelatedVideos = async({id, tags}: RelatedVideoProps) => {
    const limit = 5;
    // ?tags_like=javascript&tags_like=react&id!=1
    const queryString = tags?.map((tag: string, i: number) => {
        return `tags_like=${tag}`;
    }).join('&');

    const uniqueLimitVideo = `&id_ne=${id}&_limit=${limit}`;

    const queryAPI = `/videos/?${queryString}${uniqueLimitVideo}`;
    console.log("queryAPI", queryAPI);
    const response = await axiosInstance.get(queryAPI);
    return response.data;
}