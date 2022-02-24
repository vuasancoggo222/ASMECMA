
import { update } from "../../api/category-api"
import { get } from "../../api/category-api"
const categoryEdit = {
   async render(id) {
       const { data } = await get(id)
       return /*html*/ `
       <div>
         <div class="md:grid md:grid-cols-3 md:gap-6">
           <div class="mt-5 md:mt-0 md:col-span-2">
             <form action="" id="form-edit">
               <div class="shadow sm:rounded-md sm:overflow-hidden">
                 <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                   <div class="grid grid-cols-4 gap-6">
                     <div class="col-span-3 sm:col-span-2">
                       <label for="" class="block text-sm font-medium text-gray-700">
                        Tên danh mục
                       </label>
                       <div class="mt-1 flex rounded-md shadow-sm">
                         <span  class="inline-flex items-center px-3 rounded-l-md border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                         </span>
                         <input id="category-name" value="${data.name}" type="text" name="category" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Ví dụ: Váy Super Idol ">
                       </div>
                     </div>
                 <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                   <button id="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-600 hover:slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     Save
                   </button>
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
               `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit")
        const categoryName = document.querySelector("#category-name")
                formEdit.addEventListener("submit", (event) => {
                  event.preventDefault()
                    update({
                        id,
                        categoryname: categoryName.value
                    })
                        .then((result) => console.log(result.data))
                        .then(window.document.location.href="/admin/category-table")
                        .catch((error) => console.log(error));
                       
                })
    },
};
export default categoryEdit;

