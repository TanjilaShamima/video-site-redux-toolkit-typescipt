import axiosInstance from "@/src/networks/NetworksAPI";

export const getAllVideos = async() => {
    try {
        const response = await axiosInstance.get('/videos');
        console.log("response", response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}