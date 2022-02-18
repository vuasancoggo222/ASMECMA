import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {reRender} from "../utils/reRender"
import { getAll} from "../api/products-api"
import { numberFormat} from "../components/price-format"
import { getAll as getCategory } from "../api/category-api"
import { getByCate } from "../api/products-api"
const productsPage = {
    
    async render(){
        const { data } = await getAll()
        const Cates = await getCategory()
        const dataC = Cates.data
        console.log(dataC);
    return /*html*/ `
    ${Header.render()}
    ${Navigation.render()}
    <div class=" cateList text-center mt-5">
    <button id="allProducts"  class="ml-[15px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-[25px] rounded-md">Tất Cả</button>
    ${dataC.map(cate =>{
        return /*html*/`
        <button data-id="${cate.id}" class=" cate ml-[15px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-[25px] rounded-md">${cate.name}</button>
        `
    }).join("")}
    </div>
    <div id="main" class="container mx-auto grid grid-cols-6">
    ${data.map((product) => /*html*/ `
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
    ${Footer.render()}
    `
    },
     afterRender(){
    const btnsCate = document.querySelectorAll('.cate')
    const cateList = document.querySelector(".cateList")
    const container = document.querySelector('#main')
    btnsCate.forEach(btn =>{
     
        btn.addEventListener('click', async (e)=>{
            e.preventDefault();
            container.classList.add('hidden');
            const id = btn.dataset.id
            const getProductbyCate = await getByCate(id)
            const dataGBC = getProductbyCate.data
            const container2 = document.querySelector('#container2')
            console.log(dataGBC);
            const allProducts = document.querySelector("#allProducts")
            allProducts.addEventListener("click",(e)=>{
e.preventDefault()
reRender(productsPage,"#app")
            })
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
    })
   
    }
}
export default productsPage