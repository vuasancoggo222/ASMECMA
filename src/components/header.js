import { search } from "../api/products-api"
const Header ={
    render(){
    return /*html*/`
    <header class="max-w-full bg-[#1A94FF]">
    <div class="flex justify-between py-[33px] m-auto max-w-screen-xl">
      <img class="logo w-[60px] h-[40px] ml-[15px] pb-2"
        src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="" />
      <a href="" class="text-white text-xs font-semibold mt-3 mr-5 font-serif">Fake</a>
      <form action="" class="ml-[35px]" id="form-search">
        <input type="text" id="search" class="w-[650px] h-[40px] mr-[5px]" />
        <button onclick="" class="w-[120px] h-[41px] bg-[#0E64BC] text-white shadow-blue-500/50">
        <a href="/search">Search</a>
        </button>
      </form>
      <form action="" class="ml-[30px]">
        <div id="auth">
          <a href="" class="text-2xl text-white "><i class="fas fa-user"></i></a>
          <a href="/sign-in-page" id="signin" class="text-white text-sm">Đăng nhập/</a>
          <a href="/sign-up-page" id="sinup" class="text-white text-sm">Đăng ký</a>
        </div>
        <div id="welcome_user" style="display:none">
        <a href="" class="text-2xl text-white "><i class="fas fa-user"></i></a>
        <a href="" id="username" class="text-white text-sm"></a>
        <a href="" id="logout" class="text-white text-sm">/ Đăng xuất</a>
      </div>
      </form>
      <div class="mr-[25px]">
        <a href="" class="text-2xl text-white ml-3 mr-1"><i class="fas fa-shopping-cart"></i></a>
        <a href="" class="text-white text-sm">Giỏ hàng</a>
      </div>
    </div>
  </header>
    `
    },
    afterRender(){

    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
   const auth = document.getElementById('auth')
   const welcome = document.getElementById('welcome_user')
   const username = document.getElementById('username')
   const logout = document.getElementById('logout')
    auth.style.display = "none";
    welcome.style.display = "block"
    username.innerHTML = user.name;
    }
    logout.addEventListener('click', function(){
      localStorage.removeItem('user');
  })
    },
}
export default Header