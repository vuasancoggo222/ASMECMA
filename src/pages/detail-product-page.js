import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {get} from "../api/products-api"
import { addToCart } from '../utils/cart';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import {numberFormat} from "../components/price-format"
const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        console.log(data);
        return /*html*/`
        ${Header.render()}
        ${Navigation.render()}
        <div class="container mx-auto">
        <!-- component -->
<section class="text-gray-700 body-font overflow-hidden bg-white">
<div class="container px-5 py-24 mx-auto">
  <div class="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="${data.image}">
    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <h2 class="text-sm title-font text-gray-500 tracking-widest">${data.cate.name}</h2>
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${data.name}</h1>
      <div class="flex mb-4">
        <span class="flex items-center">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <span class="text-gray-600 ml-3">4 Reviews</span>
        </span>
        <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-2 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-2 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>
        </span>
      </div>
      <p class="leading-relaxed">${data.description}</p>
      <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        <div class="flex">
        <input type="number" id="inputValue" class=" pl-2 w-[45px] border border-black" value="1"/>
        </div>
        <div class="flex ml-6 items-center">
          <div class="relative">
          
          </div>
        </div>
      </div>
      <div class="flex">
        <span class="title-font font-medium text-2xl text-gray-900">${numberFormat.format(data.price)}</span>
        <button id="btnAddTocart" class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to cart</button>
      
      </div>
    </div>
  </div>
</div>
</section>
          ${Footer.render()}  
        `
    },
    afterRender(id){
        Header.afterRender()
        const btnAddTocart = document.querySelector('#btnAddTocart');
        const inputValue = document.querySelector('#inputValue');
        btnAddTocart.addEventListener('click',async(e)=>{
          e.preventDefault()
          const { data } = await get(id);
            addToCart({...data, quantity: inputValue.value ? +inputValue.value : 1}, function(){
                toastr.success("Thêm vào giỏ hàng thành công!");
            })
        })
      }
}
export default DetailPage