import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {get} from "../api/products-api"
import { addToCart } from '../utils/cart';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
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
        <input type="number" id="inputValue" class="border border-black" value="1" />
        <button id="btnAddTocart" class="text-2xl bg-indigo-500 text-white">Thêm vào giỏ hàng</button>
         </div>
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