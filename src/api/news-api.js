import instance from "./instance";

export const getAll = () => {
    const url = "/news";
    return instance.get(url);
}
export const get10 = () => {
    const url = "/news?_start=0&_limit=10";
    return instance.get(url);
}
export const get = (id) => {
    const url = `/news/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url =`/news`;
    return instance.post(url, post);
}
export const update = (news) => {
    const url = `/news/${news.id}`;
    return instance.put(url, news);
}
export const remove = (id) => {
    const url =`/news/${id}`
    return instance.delete(url)
}