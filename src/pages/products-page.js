import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import { getAll} from "../api/products-api"
import { numberFormat} from "../components/price-format"
const productsPage = {
    
    async render(){
        const { data } = await getAll()
    return /*html*/ `
    ${Header.render()}
    ${Navigation.render()}
    <div class="container mx-auto grid grid-cols-6">
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
    ${Footer.render()}
    `
    },
}
export default productsPage