import axiosClient from "./axios-client";

class ProductApi {
  getProductsViaCategory = (params) => {
    const url = "/api/v1/product";
    return axiosClient.get(`${url}/${params}`);
  };
}
const productApi = new ProductApi();
export default productApi;
