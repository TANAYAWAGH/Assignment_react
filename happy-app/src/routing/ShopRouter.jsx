import { BrowserRouter,Route,Routes } from "react-router-dom";
import ShopNavBar from "./ShopNavBar";
import Electronic from "../components/electronic/Electronic";
import Clothing from "../components/clothing/Clothing";
import PageNotFound from "../components/PageNotFound";
import Home from "../components/Home";
import Mobile from "../components/electronic/mobile/Mobile";
import Laptop from "../components/electronic/laptop/Laptop";
import MobileGallery from "../components/electronic/mobile/MobileGallery";
import Men from "../components/clothing/men/Men";
import Women from "../components/clothing/women/Women";
import Kids from "../components/clothing/kids/Kids";
import MobileDetails from "../components/electronic/mobile/MobileDetails";
import LaptopDetails from "../components/electronic/laptop/LaptopDetails";
import LaptopGallery from "../components/electronic/laptop/LaptopGallery";
import BikeGallary from "../components/bikes/BikeGallary";
import CarGallary from "../components/cars/CarGallary";
import StateShare from "../components/state_sharing/StateShare";
import Refrigerator from "../components/electronic/refrigerator/Refrigerator";
import RefrigeratorGallery from "../components/electronic/refrigerator/RefrigeratorGallery";
import RefrigeratorDetails from "../components/electronic/refrigerator/RefrigeratorDetails";
import ClothDetail from "../components/clothing/ClothDetail";
import ClothsGallery from "../components/clothing/ClothsGallery";
import ContextDemo from "../components/context/ContextDemo"
import RefDemo from "../components/ref/RefDemo";

const ShopRouter = ()=>{
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <ShopNavBar/>}>
            <Route index element={<Home/>}/>
            <Route path="elecs" element={<Electronic/>}>
               <Route path="mobile" element={<Mobile/>} >
               <Route path="" element={<MobileGallery/>}/>
               <Route path="detail/:id" element={<MobileDetails/>}/>
               </Route>
               <Route path="laptop" element={< Laptop />}>
               <Route path="" element={<LaptopGallery/>}/>
               <Route path="detail/:id" element={<LaptopDetails/>}/>
               </Route>
               <Route path="refrigerator" element={< Refrigerator />}>
               <Route path="" element={<RefrigeratorGallery/>}/>
               <Route path="detail/:id" element={<RefrigeratorDetails/>}/>
               </Route>
            </Route>
            <Route path="cloths" element={<Clothing />}>
            <Route path=":person" element={<ClothsGallery />} />
            <Route path=":person/detail/:id" element={<ClothDetail />} />
          </Route>
            <Route path="bikes" element={<BikeGallary/>}/>
            <Route path="cars" element={<CarGallary/>}/>
            <Route path="state_share" element={<StateShare/>} />
            <Route path="context" element={<ContextDemo/>}/>
            <Route path="ref" element={<RefDemo/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes> 
        </BrowserRouter>
    )
}

export default ShopRouter;