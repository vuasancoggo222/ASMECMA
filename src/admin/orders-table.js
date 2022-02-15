import dashboardUI from "../components/dashboardUI";
import { getAll } from "../api/orders-api";
const ordersTable = {
  async render() {
    const { data } = await getAll();
    return /*html*/ `
        ${dashboardUI.render()}
        <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-md sm:rounded-lg">
                    <table class="min-w-full">
                        <thead class="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Tên Người Nhận
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Số Điện Thoại
                            </th>
                             <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          Địa Chỉ
                    </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                               Thông Tin Đơn Hàng
                                </th>
                                </th>
                                <th colspan="2" scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Chức năng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                    ${data
                      .map(
                        (order) => /*html*/ `
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${order.name}</a></h3> </div>
                    
                    </td>
                   
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${order.phoneNumber}</a></h3> </div>
                    
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${order.address}</a></h3> </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${order.cart}</a></h3> </div>
                    
                    </td>
                
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="/admin/orders-table/${order.id}/edit" class="text-indigo-600 hover:text-indigo-900">Xác Nhận Đơn Hàng</a>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="/admin/orders-table/${order.id}/delete" class="text-indigo-600 hover:text-indigo-900">Huỷ Đơn Hàng</a>
                    </td>            
                    </tr>
                    
                    `
                      )
                      .join("")}   
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        `;
  },
};
export default ordersTable;
