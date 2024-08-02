import http from "@/api";
// import Cookies from "js-cookie";

export const getLikedProducts = (limit : any , page: any)=>{
    return http.get(`/wishlist?page=${page}&limit=${limit}`)
}
// export const getSingleProduct = ()=>{
//     const id = Cookies.get("product_id");
//     return http.get(`/product/${id}`)
// }