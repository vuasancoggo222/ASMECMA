import dashboardUI from "../../components/dashboardUI";
import { get } from "../../api/orders-api";
import {numberFormat} from "../../components/price-format"
const OrderInfo = {
  async render(id) {
    const { data } = await get(id);
    console.log(data);
    return /*html*/ `
    ${dashboardUI.render()}
    <script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

<!-- ====== Table Section Start -->
<section class="bg-white py-20 lg:py-[120px]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="max-w-full overflow-x-auto">
               <table class="table-auto w-full">
                  <thead>
                     <tr class="bg-primary text-center">
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                           >
                          ProductID
                        </th>
                        <th
                        class="
                        w-1/6
                        min-w-[160px]
                        text-lg
                        font-semibold
                        text-white
                        py-4
                        lg:py-7
                        px-3
                        lg:px-4
                        "
                        >
                        Image
                     </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           ProductName
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           Price
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           Quantity
                        </th>
                       
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-r border-transparent
                           "
                           >
                           
                        </th>
                     </tr>
                  </thead>
                  ${data.cart
                    .map((carts) => {
                      return /*html*/ `
                      <tbody>
                      <tr>
                         <td
                            class="
                            text-center text-dark
                            font-medium
                            text-base
                            py-5
                            px-2
                            bg-[#F3F6FF]
                            border-b border-l border-[#E8E8E8]
                            "
                            >
                            ${carts.id}
                         </td>
                         <td
                            class="
                            text-center text-dark
                            font-medium
                            text-base
                            py-5
                            px-2
                            bg-white
                            border-b border-[#E8E8E8]
                            "
                            >
                           <img src=" ${carts.image}" class="w-[120px] ml-10">
                         </td>
                         <td
                            class="
                            text-center text-dark
                            font-medium
                            text-base
                            py-5
                            px-2
                            bg-[#F3F6FF]
                            border-b border-[#E8E8E8]
                            "
                            >
                            ${carts.name}
                         </td>
                         <td
                            class="
                            text-center text-dark
                            font-medium
                            text-base
                            py-5
                            px-2
                            bg-white
                            border-b border-[#E8E8E8]
                            "
                            >
                            ${numberFormat.format(carts.price)}
                         </td>
                         <td
                            class="
                            text-center text-dark
                            font-medium
                            text-base
                            py-5
                            px-2
                            bg-[#F3F6FF]
                            border-b border-[#E8E8E8]
                            "
                            >
                            ${carts.quantity}
                         </td>
                         <td
                            class="
                            text-center text-dark
                            font-medium
                            text-base
                            py-5
                            px-2
                            bg-white
                            border-b border-r border-[#E8E8E8]
                            "
                            >
                            <a
                               href="javascript:void(0)"
                               class="
                               border border-primary
                               py-2
                               px-6
                               text-primary
                               inline-block
                               rounded
                               hover:bg-primary hover:text-white
                               "
                               >
                            ${numberFormat.format(carts.price * carts.quantity)}
                            </a>
                         </td>
                      </tr>
                   </tbody>
                   `;
                    })
                    .join("")}
               </table>
            </div>
         </div>
      </div>
   </div>
</section>
<span>Tổng    :${numberFormat.format(data.total)}</span>
        `;
  },
};
export default OrderInfo;
