import Header from "../components/header"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { getAll } from "../api/news-api"
const NewsPage ={
   async render(){
       const { data} = await getAll()
        return /*html*/ `
        ${Header.render()}
        ${Navigation.render()}
        <div class="container">
          <!-- component -->
          <section class="text-gray-600 body-font">
          <div class="container px-5 py-4 mx-auto max-w-7x1">
            <div class="flex flex-wrap w-full mb-4 p-4">
              <div class="w-full mb-6 lg:mb-0">
                <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">News</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              ${data.map(news =>{
                  return/*html*/`
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-white p-6 rounded-lg">
                 <a href="/detail-news-page/${news.id}"><img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="${news.image}"alt="Image Size 720x400"></a>
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">${news.createdAt}</h3>
                 <a href="/detail-news-page/${news.id}"><h2 class="text-lg text-gray-900 font-medium title-font mb-4">${news.name}</h2></a>
                 <a href="/detail-news-page/${news.id}"><p class="leading-relaxed text-base">${news.title}</p></a>
                </div>
              </div>
                  `;
              }).join('')}
              <!-- end news card -->
            </div>
          </div>
        </section>
      </div>
        ${Footer.render()}
        `
    },
    afterRender(){
        return /*html*/`
        ${Header.afterRender()}
        `
      
    }
}
export default NewsPage;