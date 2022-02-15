import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
const Search = {
    render(){
        return/**/`
        ${Header.render()}
        ${Navigation.render()}
        <div class="container mx-auto">
         ${data.map(product)}
         </div>
         ${Footer.render()}
        `
    },
}
export default Search