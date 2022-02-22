import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {reRender} from "../utils/reRender"
import { numberFormat} from "../components/price-format"
import { getAll as getCategory } from "../api/category-api"
import { getByCate, getbyPage,getAll,getPage1} from "../api/products-api"

const productsPage = {
    async render(){
        const Cates = await getCategory()
        const dataC = Cates.data
        const Page1 = await getPage1()
        const dataPage1 = Page1.data
        console.log(dataC);
    return /*html*/ `
    ${Header.render()}
    ${Navigation.render()}
    <div class="flex flex-wrap w-full mb-4 p-4">
              <div class="w-full mb-6 lg:mb-0">
                <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Products</h1>
                <div class="h-1 w-36 bg-indigo-500 rounded"></div>
              </div>
            </div>
    <div class=" cateList text-center mt-5">
    <button id="allProducts"  class="ml-[15px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-[25px] rounded-md">Tất Cả</button>
    ${dataC.map(cate =>{
        return /*html*/`
        <button data-id="${cate.id}" class=" cate ml-[15px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-[25px] rounded-md">${cate.name}</button>
        `
    }).join("")}
    </div>
    <div id="main" class="container mx-auto grid grid-cols-6">
    ${dataPage1.map((product) => /*html*/ `
    <div
        class="product w-[200px] h-[290px] drop-shadow-lg hover:drop-shadow-xl bg-[#F5F5FA] ml-4 mb-7 relative top-4">
        <a href="/detail-page/${product.id}"><img class="w-[200px] h-[200px]"
            src="${product.image}"
            alt="" /></a>
        <a href="/detail-page/${product.id}" class="text-black text-[14.5px] italic absolute left-4" href="">${product.name}</a>
        <a href="/detail-page/${product.id}" class="text-white text-[16px] font-medium text-red-600 absolute left-4 bottom-2" href="">${numberFormat.format(product.price)}</a>
      </div>`).join("")}
    </div>
    <div id="container2" class="mx-auto grid grid-cols-6">
         
    </div>
    <div id="pagging" class="text-center"></div>
    ${Footer.render()}
    `
    },
  async afterRender(){ 
    
    const pagging = document.querySelector('#pagging')
    const btnsCate = document.querySelectorAll('.cate')
    const container = document.querySelector('#main')
    const container2 = document.querySelector('#container2')
    const allProducts = document.querySelector("#allProducts")
    const Products = await getAll()
    const productNumber = Products.data.length
    console.log(productNumber);
    let numberPage = Math.ceil(productNumber/6)
    for (let i = 1; i <= numberPage; i++) {
        var page = `<button data-id="${i}" class="pagination text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700">${i}</button>`
        console.log(page);
        pagging.innerHTML += page
    }
    var pagination = document.querySelectorAll('.pagination')
    pagination.forEach(page =>{
       const currentPage = page.dataset.id
        page.addEventListener("click", async (e) =>{
            e.preventDefault()
           const Page = await getbyPage(currentPage)
           const dataPage = Page.data
           console.log(dataPage);
           container.classList.add('hidden');
           return /*html*/ `
            ${ container2.innerHTML = await dataPage.map((product) => /*html*/ `
            <div
                class="product w-[200px] h-[290px] drop-shadow-lg hover:drop-shadow-xl bg-[#F5F5FA] ml-4 mb-7 relative top-4">
                <a href="/detail-page/${product.id}"><img class="w-[200px] h-[200px]"
                    src="${product.image}"
                    alt="" /></a>
                <a href="/detail-page/${product.id}" class="text-black text-[14.5px] italic absolute left-4" href="">${product.name}</a>
                <a href="/detail-page/${product.id}" class="text-white text-[16px] font-medium text-red-600 absolute left-4 bottom-2" href="">${numberFormat.format(product.price)}</a>
              </div>`).join("")}
            `
        })
    })
    console.log(pagging);
    btnsCate.forEach(btn =>{
            allProducts.addEventListener("click",async (e)=>{
                e.preventDefault()
                const { data } = await getAll()
                container.classList.add('hidden');
                return `
            ${ container2.innerHTML = await data.map((product) => /*html*/ `
            <div
                class="product w-[200px] h-[290px] drop-shadow-lg hover:drop-shadow-xl bg-[#F5F5FA] ml-4 mb-7 relative top-4">
                <a href="/detail-page/${product.id}"><img class="w-[200px] h-[200px]"
                    src="${product.image}"
                    alt="" /></a>
                <a href="/detail-page/${product.id}" class="text-black text-[14.5px] italic absolute left-4" href="">${product.name}</a>
                <a href="/detail-page/${product.id}" class="text-white text-[16px] font-medium text-red-600 absolute left-4 bottom-2" href="">${numberFormat.format(product.price)}</a>
              </div>`).join("")}
            `
            })
        btn.addEventListener('click', async (e)=>{
            e.preventDefault();
            container.classList.add('hidden');
            const id = btn.dataset.id
            const getProductbyCate = await getByCate(id)
            const dataGBC = getProductbyCate.data
            console.log(dataGBC);
            return `
            ${ container2.innerHTML = await dataGBC.map((product) => /*html*/ `
            <div
                class="product w-[200px] h-[290px] drop-shadow-lg hover:drop-shadow-xl bg-[#F5F5FA] ml-4 mb-7 relative top-4">
                <a href="/detail-page/${product.id}"><img class="w-[200px] h-[200px]"
                    src="${product.image}"
                    alt="" /></a>
                <a href="/detail-page/${product.id}" class="text-black text-[14.5px] italic absolute left-4" href="">${product.name}</a>
                <a href="/detail-page/${product.id}" class="text-white text-[16px] font-medium text-red-600 absolute left-4 bottom-2" href="">${numberFormat.format(product.price)}</a>
              </div>`).join("")}
            `
            
                })
                return /*html*/ `
                ${Header.afterRender()}
                `
    })
// 
    }
}
export default productsPage