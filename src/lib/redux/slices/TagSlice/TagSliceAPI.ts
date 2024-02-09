import axiosInstance from "@/src/networks/NetworksAPI";

export const getAllTags = async () => {
    try {
        const response = await axiosInstance.get('/tags');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}