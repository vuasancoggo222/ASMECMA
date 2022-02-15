const Navigation ={
    render(){
        return/*html*/`
        <nav class="bg-white h-[45px] drop-shadow-md">
        <ul class="flex justify-center pt-[12px]">
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/">Trang Chủ</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/products-page">Sản Phẩm</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="news-page">Tin Tức</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="contact-page">Liên Hệ</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="about-page">Về Chúng Tôi</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/dashboard">Trang Quản Trị</a>
          </li>
        </ul>
      </nav>
        `
    },
}
export default Navigation