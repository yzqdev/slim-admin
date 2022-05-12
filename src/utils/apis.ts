import http from "./http";
export const postApi = (msg: any) => {
  return http.postForm("/admin/posts", msg);
};
export const loginApi = (msg: any) => {
  return http.post("/auth/login", msg);
  // return http.post("/auth/login", msg);
};
export function getUserInfoApi() {
  return http.get("/admin/userInfo");
}
export const regApi = (msg: any) => {
  return http.post("/auth/reg", msg);
};
export const getPostsApi = () => {
  return http.get("/admin/posts");
};
export const delPostsApi = (id: string) => {
  return http.delete(`/admin/posts/${id}`);
};
//comment
export function getCommentsUnreadApi() {
  return http.get("/admin/comment/unread");
}

//link
export function getLinksApi() {
  return http.get("/admin/links");
}
export function delLinksApi(id: string) {
  return http.delete(`/admin/link/${id}`);
}
export function addLinksApi(data: any) {
  return http.postForm(`/admin/link`, data);
}
