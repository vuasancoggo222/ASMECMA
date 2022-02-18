import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {get} from "../api/products-api"
const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/`
        ${Header.render()}
        ${Navigation.render()}
        <div class="container mx-auto">
        <img src="${data.image}">
        <h1>${data.name}</h1>
        <h1>${data.price}</h1>
        <h1>${data.description}</h1>
         </div>
          ${Footer.render()}  
        `
    },
    afterRender(){
        Header.afterRender()
      }
}
export default DetailPage