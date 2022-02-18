import dashboardUI from "../../components/dashboardUI";
import { getAll,remove } from "../../api/news-api";
import { editIcon, deleteIcon } from "../../components/icon"
const newsTable = {
  async render() {
    const { data } = await getAll();
    return /*html*/ `
        ${dashboardUI.render()}
        <a href="/admin/news-table/add"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-5 px-4 border border-blue-500 hover:border-transparent rounded relative left-[1320px] top-[10px]">
        Add +
      </button></a>
        <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-md sm:rounded-lg">
                    <table class="min-w-full">
                        <thead class="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Tiêu đề bài viết
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Image
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Ngày tạo
                            </th>
                             <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                           Tên tác giả 
                    </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Nội dung
                                </th>
                                </th>
                                <th colspan="2" scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Chức năng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                    ${data
                      .map(
                        (news) => /*html*/ `
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${news.title}</a></h3> </div>
                    
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="">
                      <div class="w-[130px]">
                      <a href="${news.image}">
                      <img src="${news.image}" alt=""/>
                    </a>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${news.createdAt}</a></h3> </div>
                    
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${news.name}</a></h3> </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="/detail-news-page/${news.id}">
                            Xem chi tiết
                            </a> 
                    </td>
                
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="/admin/news-table/${news.id}/edit" class="text-indigo-600 hover:text-indigo-900">${editIcon}</a>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="" data-id="${news.id}" class="delete text-indigo-600 hover:text-indigo-900">${deleteIcon}</a>
                    </td>            
                    </tr>
                    
                    `
                      )
                      .join("")}   
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        `;
  },
  afterRender(){
    const btns = document.querySelectorAll(".delete")
    btns.forEach(btn=>{
      const id = btn.dataset.id
      btn.addEventListener("click",(e)=>{
        const confirm = window.confirm("Bạn có chắc chắc muốn xoá không ?");
        if(confirm){
          remove(id).then(()=>{
            console.log("Xoá thành công")
            reRender(newsTable,"#app");
          })
        }
      })
    })
  }
};
export default newsTable;
