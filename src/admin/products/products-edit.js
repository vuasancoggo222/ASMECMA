import axios from "axios";
import Swal from 'sweetalert2'
import { getAll as GetAllCategory } from "../../api/category-api";
import { update } from "../../api/products-api"
import { get } from "../../api/products-api"
import $ from 'jquery';
import validate from 'jquery-validation';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const productsEdit = {
   async render(id) {
       const { data } = await get(id)
       const Category = await GetAllCategory()
       const dataC = Category.data
        return /*html*/ `
<div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="" id="form-edit">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="">
              <div class="col-span-3 sm:col-span-2">
                <label for="" class="block text-sm font-medium text-gray-700">
                 Tên sản phẩm
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span  class="inline-flex items-center px-3 rounded-l-md border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">

                  </span>
                  <input id="product-name"  value="${data.name}" type="text" name="product-name" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Ví dụ: Váy Super Idol ">
                </div>
              </div>
              <div class="col-span-3 sm:col-span-1">
                <label for="" class="block text-sm font-medium text-gray-700">
                 Giá sản phẩm
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span  class="inline-flex items-center px-3 rounded-l-md border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">

                  </span>
                  <input id="product-price" value="${data.price}" type="number" name="product-price"  class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Ví dụ: 100000">
                </div>
              </div>
            </div>
            <div>
            <div class="col-span-6 sm:col-span-3 my-5">
														<label for="select-category" class="block text-sm font-medium text-gray-700">Chọn Danh Mục Update</label>
														<select name="select-category" id="select-category" class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
																${dataC.map((category, index) => {
			return `
																					<option value="${category.id}" class="options-category">${category.name}</option>
																				`
		}).join("")}
														</select>
													</div>
            </div>
            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
               Description
              </label>
              <div class="mt-1">
                <textarea value="${data.description}" id="product-description"  name="product-desc" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder=""></textarea>
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
                     
                      <input value="${data.image}" id="product-image" name="product-image" type="file" >
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
        const formEdit = $("#form-edit")
        formEdit.validate({
          rules: {
           "product-name":{
             required: true,
             minlength : 3
           },
           "product-price":{
             required: true,
      
           },
           "product-desc":{
             required: true,
           },
           "product-image":{
             required: true,
           },
           "select-category":{
             required:true,
           }
          },
          messages:{
           "product-name":{
             required: "Không được để trống tên sản phẩm !",
           minlength: "Nhập ít nhất 3 ký tự"
           },
           "product-price":{
             required: "Không được để trống giá sản phẩm !",
      
           },
           "product-desc":{
             required: "Không được để trống mô tả sản phẩm !",
           },
           "product-image":{
             required: "Không được để trống ảnh sản phẩm !",
           },
           "select-category":{
             required:"Vui lòng chọn danh mục sản phẩm !"
           }
          }
         })
         ClassicEditor
         .create( document.querySelector( '#product-description' ), {
             toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
             heading: {
                 options: [
                     { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                     { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                     { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                 ]
             }
         } )
         .catch( error => {
             console.log( error );
         } );
        const productImage = document.querySelector("#product-image")
        productImage.addEventListener("change", (e) => {
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
                button.classList.remove("bg-slate-600")
                button.classList.remove("hover:slate-600")
                button.classList.add("bg-indigo-600")
                button.classList.add("hover:indigo-700")
                formEdit.addEventListener("submit", (event) => {
                  event.preventDefault()
                    update({
                        id,
                        name: document.querySelector("#product-name").value,
                        price: document.querySelector("#product-price").value,
                        cateId : document.querySelector("#select-category").value,
                        image: res.data.secure_url,
                        description: document.querySelector("#product-description").value,
                    })
                        .then((result) => console.log(result.data))
                        .then(window.document.location.href="/admin/products-table")
                        .catch((error) => console.log(error));
                       
                })
                
            });
        });
    },
};
export default productsEdit;

