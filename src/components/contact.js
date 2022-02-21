import { add } from "../api/contact-api"
import toastr from "toastr"

const Contact = {
    render(){
        return /*html*/`
        <div class="flex flex-wrap w-full mb-4 p-4">
        <div class="w-full mb-6 lg:mb-0">
          <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Contact</h1>
          <div class="h-1 w-36 bg-indigo-500 rounded"></div>
        </div>
      </div>
    <div class="grid grid-cols-2">
    <div class="contact-form">
    <div class="w-full md:w-96 md:max-w-full mx-auto mt-[25px] mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md">
  <div class="p-6 border border-gray-300 sm:rounded-md">
    <form method="POST" action="" id="contactform">
      <label class="block mb-6">
        <span class="text-gray-800">Họ và tên</span>
        <input
        id="contactname"
          type="text"
          name="name"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "

          
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-800">Email</span>
        <input
        id="contactemail"
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
         
          required
        />
      </label>
      </label>
      <label class="block mb-6">
        <span class="text-gray-800">Địa Chỉ</span>
        <input
        id="contactaddress"
          name="text"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
         
      
        />
      </label>
      </label>
      <label class="block mb-6">
        <span class="text-gray-800">Số điện thoại</span>
        <input
        id="contactphone"

          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
         
        
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-800">Nội dung</span>
        <textarea
        id="contactcontent"
          name="message"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="4"
       
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Contact Us
        </button>
      </div>
     
    </form>
  </div>
</div>
    </div>
    <div class="locate flex justify-end mr-[150px] my-5 border-indigo-500/75">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.1272229372385!2d105.14195201477064!3d22.27317008533769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cb5dc92b86da51%3A0x316fb08a123e87ca!2zUXXDoW4gxIJuIFF1eSBUaOG6o28!5e0!3m2!1sen!2s!4v1643725542867!5m2!1sen!2s"
     width="600" height="420" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
    </div>
        `
    },
    afterRender(){
    const contactName = document.querySelector('#contactname');
    const contactEmail = document.querySelector('#contactemail');
    const contactPhone = document.querySelector('#contactphone');
    const contactContent = document.querySelector('#contactcontent');
    const contactAddress = document.querySelector('#contactaddress');
    const form = document.querySelector('#contactform')
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      add({
        name : contactName.value,
        email : contactEmail.value,
        address : contactAddress.value,
        phonenumber: contactPhone.value,
        content: contactContent.value
      })
      .then((result) => console.log(result.data))
      .then(toastr.success('Cảm ơn bạn đã liên hệ chúng tôi,chúng tôi sẽ phản hồi cho bạn sớm nhất có thể !!',{timeOut:3000}))
      .then(window.location.href="/")
       .catch((error) => console.log(error));
    })
    }
}
export default Contact