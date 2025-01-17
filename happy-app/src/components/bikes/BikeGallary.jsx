import { useState } from "react";
import bikes from "./Bike_data";
const BikeGallary = ()=>{
    const [index,setIndex] = useState(0)
    const [show,setShow] = useState(false)

    const bike = bikes[index]

    return (
        <div class="card text-center">
            {/* <h2>Bike Gallary</h2>
            <h2>Showing {index+1} of {bikes.length}</h2> */}
            <h3>{bike.brand} {bike.model}</h3>
            <div>
                <img src={bike.image} alt={bike.model} width={400} height={300}/>
            </div>
            <h4>&#8377; {bike.price}</h4>
            <button className="btn btn-secondary d-grid gap-4 col-3 mx-auto" onClick={()=>setShow(!show)}> {show ? 'Hide Details':'Show More'}</button>
            { show &&
            <div>
                <table className="table table-secondary table-striped"> 
                    <thead>
                        <tr className="dark-table">
                        <th>Specification</th>
                        <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <th>Engine CC</th>
                            <td>{bike.specification.cc}</td>
                         </tr>
                         <tr>
                            <th>Mileage</th>
                            <td>{bike.specification.mileage}</td>
                         </tr>
                         <tr>
                            <th>Max Torque</th>
                            <td>{bike.specification.maxTorque}</td>
                         </tr>
                         <tr>
                            <th>Full Capacity</th>
                            <td>{bike.specification.fuelCapacity}</td>
                         </tr>
                    </tbody>
                </table>
            
            </div>
}
            <div>
                <button disabled={index===0} className="btn btn-warning mx-3 my-3 " onClick={()=>setIndex(index-1)}> &lt; </button>
                <button disabled={index===bikes.length-1} className='btn btn-warning my-3' onClick={()=> setIndex(index+1)}> &gt;</button>
            </div>
        </div>
         

    )
}

export default BikeGallary;