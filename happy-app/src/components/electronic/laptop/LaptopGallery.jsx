import LaptopCard from "./LaptopCard";
import laptops from "./Laptop_data";
import { Link } from "react-router-dom"
const LaptopGallery = ()=>{

     const laptopCardList = laptops.map(mb=>
    <div className="col" key={mb.id}>
     <Link to={"detail/"+mb.id}>
     <LaptopCard laptop={mb} /> 
     </Link>
     </div> )

     return (
        <div className="row">
            {laptopCardList}
        </div>
     )
}



export default LaptopGallery;