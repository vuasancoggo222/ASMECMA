import instance from "./instance";
export const getAll = () => {
    const url = "/products?_expand=cate";
    return instance.get(url);
}
export const get10 = () => {
    const url = "/products?_start=0&_limit=10";
    return instance.get(url);
}
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const add = (product) => {
    const url ="/products";
    return instance.post(url,product);
}
export const remove = (id) => {
    const url =`/products/${id}`
    return instance.delete(url)
}
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}
export const search = (searchValue) => {
    const url = `/products?q=${searchValue}`
    return instance.get(url);
}