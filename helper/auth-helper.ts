import Cookies from "js-cookie";

export const saveToken = (access_token: string) => {
  Cookies.set("token", access_token);
};
export const getToken = () => {
   return Cookies.get("token")
}
