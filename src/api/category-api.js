import instance from "./instance";

export const getAll = () => {
    const url = "/cates";
    return instance.get(url);
}
export const get = (id) => {
    const url = `/cates/${id}`;
    return instance.get(url);
}
export const add = (cate) => {
    const url =`/cates`;
    return instance.post(url, cate);
}
export const update = (cates) => {
    const url = `/cates/${cates.id}`;
    return instance.put(url, cates);
}
export const remove = (id) => {
    const url =`/cates/${id}`
    return instance.delete(url)
}
export const relationships = () => {
    const url = `/cates?expand=products`;
    return instance.get(url);
}