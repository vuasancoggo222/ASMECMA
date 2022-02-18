import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Contact from "../components/contact";
const contactPage = {
  async render() {
    return /*html*/ `
        ${Header.render()}
        ${Navigation.render()}
        
    <div class="container mx-auto">
        ${Contact.render()}
    </div>
          ${Footer.render()}  
        `;
  },
  afterRender(){
    Header.afterRender()
    Contact.afterRender()
  }
  
};
export default contactPage;
