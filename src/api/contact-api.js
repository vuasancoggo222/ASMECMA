import instance from "./instance";

export const getAll = () => {
    const url = "/contact";
    return instance.get(url);
}

export const add = (contact) => {
    const url =`/contact`;
    return instance.post(url, contact);
}
export const remove = (id) => {
    const url =`/contact/${id}`
    return instance.delete(url)
}