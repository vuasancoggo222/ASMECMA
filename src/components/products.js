import { getAll } from "../api/products-api";
const Products = {
  async render() {
    const { data } = await getAll();

    return /*html*/ `
        <div class="products bg-white w-[1250px] mx-auto drop-shadow-lg hover:drop-shadow-xl mt-[25px]">
        <h1 class="text-[20px] leading-4 pt-4 pl-4">Sản phẩm</h1>
        <div class="products grid grid-cols-5">
        ${data.map((product) => /*html*/ `
        <div
            class="product w-[200px] h-[290px] drop-shadow-lg hover:drop-shadow-xl bg-[#F5F5FA] ml-4 mb-7 relative top-4">
            <a href="/detail-page/${product.id}"><img class="w-[200px] h-[200px]"
                src="${product.image}"
                alt="" /></a>
            <a href="/detail-page/${product.id}" class="text-black text-[14.5px] italic absolute left-4" href="">${product.name}</a>
            <a href="/detail-page/${product.id}" class="text-white text-[16px] font-medium text-red-600 absolute left-4 bottom-2" href="">${product.price}</a>
          </div>`).join("")}
         
        </div>
        
      </div>
        `;
  },
};
export default Products;
