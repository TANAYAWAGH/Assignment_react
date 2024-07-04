import RefrigeratorCard from "./RefrigeratorCard";
import refrigerators from "./Refrigerator_data";
import { Link } from "react-router-dom"
const RefrigeratorGallery = ()=>{

     const refrigeratorcardList = refrigerators.map(mb=>
    <div className="col" key={mb.id}>
     <Link to={"detail/"+mb.id}>
     <RefrigeratorCard refrigerator={mb} /> 
     </Link>
     </div> )

     return (
        <div className="row">
            {refrigeratorcardList}
        </div>
     )
}



export default RefrigeratorGallery;