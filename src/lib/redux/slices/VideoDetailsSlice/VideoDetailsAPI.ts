import axiosInstance from "@/src/networks/NetworksAPI";

export const getVideoDetails = async (id: number) => {
  try {
    const response = await axiosInstance(`/videos/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
