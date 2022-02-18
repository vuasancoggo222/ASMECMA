import axios from "axios";
import Swal from 'sweetalert2'
import { update } from "../../api/news-api"
import { get } from "../../api/news-api"
const newsEdit = {
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
                       Tiêu đề bài viết
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span  class="inline-flex items-center px-3 rounded-l-md border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
      
                        </span>
                        <input id="news-title" value="${data.title}" type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Ví dụ: Váy Super Idol ">
                      </div>
                    </div>
                    <div class="col-span-3 sm:col-span-2">
                      <label for="" class="block text-sm font-medium text-gray-700">
                      Tác giả
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span  class="inline-flex items-center px-3 rounded-l-md border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
      
                        </span>
                        <input id="news-author" value="${data.name}" type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Ví dụ: Váy Super Idol ">
                      </div>
                    </div>
                    <div class="col-span-3 sm:col-span-1">
                      <label for="" class="block text-sm font-medium text-gray-700">
                      Ngày tạo
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span  class="inline-flex items-center px-3 rounded-l-md border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
      
                        </span>
                        <input id="news-createdAt" value="${data.createdAt}" type="date" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Ví dụ: 100000">
                      </div>
                    </div>
                  </div>
      
                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                    Content
                    </label>
                    <div class="mt-1">
                      <textarea id="news-content" value="${data.content}" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder=""></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                    
                    </p>
                  </div>
      
                  <div>
      
                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                           
                            <input value="${data.image}" id="news-image" name="file-upload" type="file" >
                          </label>
                          <span></span>
                          <p class="pl-1">Upload a file or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button id="button" disabled class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-600 hover:slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
        const newsImage = document.querySelector("#news-image")
        newsImage.addEventListener("change", (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "ypnhyinn");
            axios({
                url: "https://api.cloudinary.com/v1_1/ecma/image/upload",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-formendcoded",
                },
                data: formData,
            })

            .then((res) => { 
                const button = document.querySelector("#button");
                button.removeAttribute("disabled")
                button.classList.remove("bg-slate-600")
                button.classList.remove("hover:slate-600")
                button.classList.add("bg-indigo-600")
                button.classList.add("hover:indigo-700")
                formEdit.addEventListener("submit", (event) => {
                  event.preventDefault()
                    update({
                        id,
                        title: document.querySelector("#news-title").value,
                        createdAt: document.querySelector("#news-createdAt").value,
                        name: document.querySelector("#news-author").value,
                        image: res.data.secure_url,
                        content: document.querySelector("#news-content").value,
                    })
                        .then((result) => console.log(result.data))
                        .then(window.document.location.href="/admin/news-table")
                        .catch((error) => console.log(error));
                       
                })
                
            });
        });
    },
};
export default newsEdit;

