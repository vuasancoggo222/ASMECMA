const dashboardUI = {
    render(){
        return /*html*/`
        <nav class="bg-white h-[45px] drop-shadow-md">
        <ul class="flex justify-center pt-[12px]">
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/dashboard">Dashboard</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/products-table">Bảng Sản Phẩm</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/news-table">Bảng Bài Viết</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/users-table">Bảng Người Dùng</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/contact-table">Bảng Phản Hồi</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/orders-table">Bảng Đơn Hàng</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
          <a href="/admin/category-table">Bảng Danh Mục</a>
        </li>
        <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
          <a href="/">Về Trang Chủ</a>
        </li>
        </ul>
      </nav>
        `
    }
}
export default dashboardUI;