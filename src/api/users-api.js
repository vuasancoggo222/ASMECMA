import instance from "./instance";

export const getAll = () => {
    const url = "/users";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url =`/users`;
    return instance.post(url, post);
}
export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
  };
  
export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
  };