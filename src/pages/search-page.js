import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
const searchPage ={
    render(){
        return/*html*/`
        ${Header.render()}
        ${Navigation.render()}
        <div class="container mx-auto">
        <h1>Kết quả tìm kiếm cho :</h1>
         </div>
         ${Footer.render()}
        `},
        afterRender(){
            Header.afterRender()
        }
}
export default searchPage