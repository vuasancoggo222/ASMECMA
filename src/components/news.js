import { get10 } from "../api/news-api";
const News = {
  async render() {
    const { data } = await get10();
    return /*html*/ `
        <div class="news bg-white w-[1250px] mx-auto drop-shadow-lg hover:drop-shadow-xl mt-[25px]">
        <h1 class="text-[20px] leading-4 pt-4 pl-4">Bài Viết</h1>
        <div class="news grid grid-cols-5">
        ${data.map((news) => /*html*/ `
        <div
            class="news w-[200px] h-[290px] drop-shadow-lg hover:drop-shadow-xl bg-[#F5F5FA] ml-4 mb-7 relative top-4">
            <a href="/detail-news-page/${news.id}"><img class="w-[200px] h-[200px]"
                src="${news.image}"
                alt="" /></a>
            <a href="/detail-news-page/${news.id}" class="text-black text-[14.5px] italic absolute left-4" href="">${news.name}</a>
            <a href="/detail-news-page/${news.id}" class="text-white text-[16px] font-medium text-red-600 absolute left-4 bottom-2" href="">${news.title}</a>
          </div>`).join("")}
         
        </div>
        
      </div>
        `;
  },
};
export default News;
