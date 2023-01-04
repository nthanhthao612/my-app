import axiosClient from "./axios-client";

class MessageApi {
  getAll = () => {
    const url = "/api/v1/message";
    return axiosClient.get(`${url}/${"all"}`);
  };
}
const messageApi = new MessageApi();
export default messageApi;
