import axiosInstance from "@/src/networks/NetworksAPI";

export const getAllVideos = async(tags: string[], search: string) => {
    try {
        let queryString = '';
        if(tags.length > 0){
            queryString = tags.map((tag: string) => `tags_like=${tag}`).join('&');
        
        }
        if(search !== '') {
            queryString = queryString === '' ? `q=${search}` : `&q=${search}`;
        }
        const response = await axiosInstance.get(`/videos/?${queryString}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}