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
export const getByCate = (id) => {
    const url = `products?cateId=${id}`;
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
export const getPage1 = (currentPage) => {
    const url = `/products?_page=1&_limit=6`
    return instance.get(url) 
}
export const getbyPage = (currentPage) => {
    const url = `/products?_page=${currentPage}&_limit=6`
    return instance.get(url) 
}