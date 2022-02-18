import dashboardUI from "../../components/dashboardUI";
import { getAll,remove,update } from "../../api/users-api";
import { reRender } from "../../utils/reRender";
import { deleteIcon,upIcon,downIcon } from "../../components/icon"
const userTable = {
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
                                    Tên Người Dùng
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Email
                            </th>
                             <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          Mật Khẩu
                    </th>
                    </th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                Địa Chỉ
           </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                               Vai trò
                                </th>
                                </th>
                                <th colspan="3" scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Chức năng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                    ${data
                      .map(
                        (user) => /*html*/ `
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${user.name}</a></h3> </div>
                    
                    </td>
                   
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${user.email}</a></h3> </div>
                    
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">********</a></h3> </div>
                    </td>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${user.address}</a></h3> </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${user.isAdmin ? "Admin" :"Người Dùng"}</a></h3> </div>
                    
                    </td>
                
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="" data-id="${user.id}" class=" update-role text-indigo-600 hover:text-indigo-900">${upIcon}</a>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="" data-id="${user.id}" class=" degrade-role text-indigo-600 hover:text-indigo-900">${downIcon}</a>
                    </td>
         
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href="" data-id="${user.id}" class=" delete text-indigo-600 hover:text-indigo-900">${deleteIcon}</a>
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
  afterRender(){
    const btns = document.querySelectorAll(".delete")
    btns.forEach(btn=>{
      const id = btn.dataset.id
      btn.addEventListener("click",(e)=>{
        const confirm = window.confirm("Bạn có chắc chắc muốn xoá không ?");
        if(confirm){
          remove(id).then(()=>{
            console.log("Xoá thành công")
            reRender(userTable,"#app");
          })
        }
      })
    })
    const btnsUpdate = document.querySelectorAll(".update-role")
    btnsUpdate.forEach(btnUpdate=>{
      const id = btnUpdate.dataset.id
      console.log(id)
      btnUpdate.addEventListener("click",(e)=>{
        e.preventDefault();
        const confirm = window.confirm(`Bạn có chắc chắc muốn chuyển vai trò tài khoản này không ?`);
        if(confirm){
          update({
            id,
            isAdmin : true
          }).then(()=>{
            console.log("Update thành công")
            reRender(userTable,"#app");
          })
        }
      })
    })
    const btnsDegrade = document.querySelectorAll(".degrade-role")
    btnsDegrade.forEach(btnDegrade=>{
      const id = btnDegrade.dataset.id
      console.log(id)
      btnDegrade.addEventListener("click",(e)=>{
        e.preventDefault();
        const confirm = window.confirm(`Bạn có chắc chắc muốn chuyển vai trò tài khoản này không ?`);
        if(confirm){
          update({
            id,
            isAdmin : false
          }).then(()=>{
            console.log("Degrade thành công")
            reRender(userTable,"#app");
          })
        }
      })
    })
  }
};
export default userTable;
