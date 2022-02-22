import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {add} from "../api/orders-api"
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
const CheckOut = {
    render() {
        return /*html*/`
        ${Header.render()}
        ${Navigation.render()}
        <div class="container  mx-auto">
        <div class="leading-loose">
        <form id="form" class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
          <p class="text-gray-800 font-medium">Customer information</p>
          <div class="">
            <label class="block text-sm text-gray-00" for="cus_name">Name</label>
            <input class="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded" id="name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name">
          </div>
          <div class="mt-2">
            <label class="block text-sm text-gray-600" for="cus_email">Email</label>
            <input class="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded" id="email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email">
          </div>
          <div class="mt-2">
            <label class="block text-sm text-gray-600" for="cus_email">Phone Number</label>
            <input class="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded" id="phonenumber" name="cus_email" type="text" required="" placeholder="Your Phone Number" aria-label="Email">
          </div>
          <div class="mt-2">
            <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="address" name="cus_email" type="text" required="" placeholder="Address" aria-label="Email">
          </div>
      
          <div class="mt-4">
            <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
        <!-- component -->

        ${Footer.render()}
        `
    },
    afterRender() {
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phonenumber = document.querySelector('#phonenumber');
const address = document.querySelector('#address');
const cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);
form.addEventListener('submit',(e)=>{
    e.preventDefault()
add({
    name : name.value,
    phonenumber : phonenumber.value,
    address : address.value,
    email : email.value,
    total : JSON.parse(localStorage.getItem('total')),
    cart : cart,
})
.then(response => console.log(response.data))
.then(toastr.success("Đặt hàng thành công !!"))
.then(document.location.href="/products-page")

})

        return `
        ${Header.afterRender()}
        `
    },
}
export default CheckOut