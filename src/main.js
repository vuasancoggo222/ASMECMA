import "../style.css";
import Navigo from "navigo";
import homePage from "./pages/home";
import contactPage from "./pages/contact-page";
import aboutPage from "./pages/about-page"
import signinPage from "./authentication/signin"
import signupPage from "./authentication/signup";
import DetailPage from "./pages/detail-page"
import AdminDashboard from "./admin/dashboard"
import productsTable from "./admin/products/products-table";
import newsTable from "./admin/news-table";
import contactTable from "./admin/contact-table";
import usersTable from "./admin/users-table";
import ordersTable from "./admin/orders-table";
import productsAdd from "./admin/products/products-add"
import productsEdit from "./admin/products/products-edit"
import Search from "./components/search";
const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
  if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
  before(done,match) {
      if(JSON.parse(localStorage.getItem('user'))){
          const isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
          if(isAdmin == true){
              done();
          } else {
              document.location.href="/"
          }
      } else {
          document.location.href="/"
      }
    
    
  }
})
router.on({
  "/": () => {
    print(homePage);
  },
  "contact-page":() => {
    print(contactPage);
  },
  "about-page":() => {
    print(aboutPage);
  },
  "sign-in-page":() => {
   print(signinPage);
  },
  "sign-up-page":() => {
    print(signupPage);
  },
  "detail-page/:id":(value) => {
    print(DetailPage,value.data.id);
  },
  "admin/dashboard":() => {
    print(AdminDashboard)
  },
  "admin/products-table":() => {
    print(productsTable)
  },
  "admin/news-table":() => {
  print(newsTable)
  },
  "admin/contact-table":() => {
    print(contactTable)
    },
    "admin/users-table":() => {
      print(usersTable)
      },
      "admin/orders-table":() => {
        print(ordersTable)
        },
        "admin/products-table/add":() => {
          print(productsAdd)
        },
        "admin/products-table/:id/edit":({data}) => {
          print(productsEdit,data.id)
        },
        "products-page/search":()=>{
          print(Search)
        }
});
router.resolve();
