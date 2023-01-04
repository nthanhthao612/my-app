import axiosClient from "./axios-client";

class PromotionApi {
  getAll = () => {
    const url = "/api/v1/promotion";
    return axiosClient.get(`${url}/${"all"}`);
  };
}
const promotionApi = new PromotionApi();
export default promotionApi;
