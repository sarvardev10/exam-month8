import http from "@/api";

export const postLike = async (id: any) => {
  try {
    const res = await http.post(`/like/${id}`);
    if(res.status === 201){
        return res
    }
  } catch (err) {
    console.log(err);
  }
};
export const getLike = async (limit:any , page:any) => {
    try{
        const res = await http.get(`/wishlist?page=${page}&limit=${limit}`);
        if(res.status === 200){
            return res
        }
    }catch(err){
        console.log(err)
    }
}