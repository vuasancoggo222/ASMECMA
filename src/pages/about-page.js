import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import About from "../components/about";
const aboutPage = {
    render() {
        return/*html*/`
        ${Header.render()}
        ${Navigation.render()}
        
        <div class="container mx-auto text-[14px] text-[#111111] bg-white leading-[24px] font-sans pl-[160px] font-normal">
         ${About.render()}
        </div>
          ${Footer.render()}  
        `;
    },
    afterRender(){
      Header.afterRender()
    }
}
export default aboutPage