import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {get} from "../api/news-api"
const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/`
        ${Header.render()}
        ${Navigation.render()}
        <div class="container mx-auto">
        <h1>${data.createdAt}</h1>
        <h1>${data.title}</h1>
        <img src="${data.image}">
        <h1>${data.content}</h1>
         </div>
          ${Footer.render()}  
        `
    },
    afterRender(){
        Header.afterRender()
      }
}
export default DetailNewsPage