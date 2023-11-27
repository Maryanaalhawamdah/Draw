import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Userprofile from "./pages/Account/profile"
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Artist from "./pages/Artist/artist";
import NotFound from "./pages/not found/error";
import Paints from "./pages/Paints/paints";
import AHome from './Admin/adminHome/ahome/Home';
import AProducts from "./Admin/Product/get";
import APedit from "./Admin/Product/edit";
import APadd from "./Admin/Product/add";
import APdelete from "./Admin/Product/delete";
import AUser from "./Admin/Users/get";
import ADuser from "./Admin/Users/add";
import ADuedit from "./Admin/Users/edit";
import ADudelete from "./Admin/Users/delete";
import AAdmin from "./Admin/admin/get";
import AAadd from "./Admin/admin/add";
import AAedit from "./Admin/admin/edit";
import AAdelete from "./Admin/admin/delete";
import ACategory from "./Admin/Category/get";
import ACadd from "./Admin/Category/add";
import ACedit from "./Admin/Category/edit";
import ACdelete from "./Admin/Category/delete";
import AOrder from "./Admin/Orders/get";
import AArtist from "./Admin/artists/get";
import AArtadd from "./Admin/artists/add";
import AArtedit from "./Admin/artists/edit";
import AArtdel from "./Admin/artists/delete";

 const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        <Route path="/artist" element={<Artist />}></Route>
        <Route path="*" element={<NotFound/>} />
        <Route path="/paints" element={<Paints/>} />
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/profile" element={<Userprofile />}></Route>
      <Route path="/ahome" element={<AHome/>}>  </Route>
      <Route path="/apget" element={<AProducts/>}>  </Route>
      <Route path="/aadd" element={<APadd/>}>  </Route>
      <Route path="/apedit/:id" element={<APedit/>}>  </Route>
      <Route path="/apdelete/:id" element={<APdelete/>}>  </Route>
      <Route path="/auget" element={<AUser/>}>  </Route>
      <Route path="/aduser" element={<ADuser/>}>  </Route>
      <Route path="/aduedit/:id" element={<ADuedit/>}>  </Route>
      <Route path="/adudelate/:id" element={<ADudelete/>}>  </Route>
      <Route path="/aadmin" element={<AAdmin/>}></Route>
      <Route path="/aaadd" element={<AAadd/>}></Route>
      <Route path="/aaedit/:id" element={<AAedit/>}></Route>
      <Route path="/aadelete/:id" element={<AAdelete/>}></Route>
      <Route path="/acategory" element={<ACategory/>}></Route>
      <Route path="/acatadd" element={<ACadd/>}></Route>
      <Route path="/acatedit/:id" element={<ACedit/>}></Route>
       <Route path="/acatdel/:id" element={<ACdelete/>}></Route>
      <Route path="/aorder" element={<AOrder/>}></Route>
      <Route path="/aartist" element={<AArtist/>}></Route>
      <Route path="/aarteadd" element={<AArtadd/>}></Route>
      <Route path="/aarteedit/:id" element={<AArtedit/>}></Route>
      <Route path="/aartedelete/:id" element={<AArtdel/>}></Route>
      <Route path="/specialcase" element={<SpecialCase/>}> </Route>
    </Route>,
    
   
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
