import {get} from "../api/orders-api"
import Header from "../components/header"
import Footer from "../components/footer"
const OrderInfo = {
    async render(id){
        const {data} = await get(id);
        console.log(data);
        return`
        ${Header.render()}
        ${data.name}
        <br>
        ${data.address}
        <br>
        ${data.phonenumber}
        <br>
        ${data.email}
        <br>
        ${data.cart.map(item =>{
            return`
            <div>ID:${item.id} name: ${item.name} dongia ${item.price} so luong ${item.quantity}</div>
            `
        })}
        ${Footer.render()}
        `
    }
}
export default OrderInfo;