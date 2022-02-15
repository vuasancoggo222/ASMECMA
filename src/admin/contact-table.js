import dashboardUI from "../components/dashboardUI";
import { getAll } from "../api/contact-api";
const contactTable = {
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
                                    Người Liên Hệ
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Địa Chỉ
                            </th>
                             <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                           Số điện thoại
                    </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Email
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                               Nội Dung
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
                        (contact) => /*html*/ `
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${contact.name}</a></h3> </div>
                    
                    </td>
                   
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${contact.address}</a></h3> </div>
                    
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${contact.phonenumber}</a></h3> </div>
                    </td>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${contact.email}</a></h3> </div>
                    </td>
                    <td class="py-4 px-6 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">Xem chi tiết</a></h3> </div>
                    </td>
                
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="/admin/contact-table/${contact.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="/admin/contact-table/${contact.id}/delete" class="text-indigo-600 hover:text-indigo-900">Delete</a>
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
export default contactTable;
