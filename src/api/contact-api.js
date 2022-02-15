import instance from "./instance";

export const getAll = () => {
    const url = "/contact";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/contact/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url =`/contact`;
    return instance.post(url, post);
}