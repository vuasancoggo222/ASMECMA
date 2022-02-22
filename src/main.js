import "../style.css";
import Navigo from "navigo";
import homePage from "./pages/home";
import contactPage from "./pages/contact-page";
import productsPage from "./pages/products-page";
import aboutPage from "./pages/about-page"
import signinPage from "./authentication/signin"
import signupPage from "./authentication/signup";
import DetailPage from "./pages/detail-product-page"
import DetailNewsPage from "./pages/detail-news-page"
import AdminDashboard from "./admin/dashboard"
import productsTable from "./admin/products/products-table";
import newsTable from "./admin/news/news-table";
import contactTable from "./admin/contact/contact-table";
import usersTable from "./admin/users/users-table";
import ordersTable from "./admin/orders/orders-table";
import categoryTable from "./admin/category/category-table";
import productsAdd from "./admin/products/products-add"
import NewsAdd from "./admin/news/news-add"
import newsEdit from "./admin/news/news-edit";
import productsEdit from "./admin/products/products-edit"
import searchPage from "./pages/search-page";
import categoryAdd from "./admin/category/category-add"
import categoryEdit from "./admin/category/category-edit";
import NewsPage from "./pages/news-page"
import CartPage from "./pages/cart";
import CheckOut from "./pages/checkout"
import OrderInfo from "./pages/orders-info";
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
  "products-page":() => {
    print(productsPage);
  },
  "news-page":() => {
    print(NewsPage);
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
  "detail-news-page/:id":(value) => {
    print(DetailNewsPage,value.data.id);
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
      "admin/category-table":() => {
        print(categoryTable)
        },
      "admin/orders-table":() => {
        print(ordersTable)
        },
        "admin/products-table/add":() => {
          print(productsAdd)
        },
        "/admin/news-table/add":() => {
          print(NewsAdd)
        },
        "/admin/category-table/add":() => {
          print(categoryAdd)
        },
        "admin/products-table/:id/edit":({data}) => {
          print(productsEdit,data.id)
        },
        "admin/category-table/:id/edit":({data}) => {
          print(categoryEdit,data.id)
        },
        "admin/news-table/:id/edit":({data}) => {
          print(newsEdit,data.id)
        },
        "/search":()=>{
          print(searchPage)
        },
        "/cart":()=>{
          print(CartPage)
        },
        "/checkout":()=>{
          print(CheckOut)
        },
        "/admin/orders-detail/:id":(value) => {
          print(OrderInfo,value.data.id);
        },
});
router.resolve();
