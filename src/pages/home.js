import Header from "../components/header";
import Navigation from "../components/navigation";
import Banner from "../components/banner";
import Category from "../components/category";
import Products from "../components/products";
import Footer from "../components/footer";
import News from "../components/news";
const homePage = {
  async render() {
    return /*html*/ `
        ${Header.render()}
        ${Navigation.render()}
    <div class="container mx-auto">
          ${Banner.render()}
          ${ await Products.render()}
          ${ await News.render()}
      </div>
          ${Footer.render()}  
      
        `;
  },
  afterRender(){
    Header.afterRender()
  }
};
export default homePage;

