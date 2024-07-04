import { useState } from "react";
import cars from "./Car_data";
const CarGallary = ()=>{
    const [index,setIndex] = useState(0)
    const [show,setShow] = useState(false)

    const car = cars[index]

    return (
        <div class="card text-center">
           {/*  <h2>Car Gallary</h2>
            <h2>Showing {index+1} of {cars.length}</h2> */}
            <h3>{car.brand} {car.model}</h3>
            <div>
                <img src={car.image} alt={car.model} width={400} height={300}/>
            </div>
            <h4>&#8377; {car.price}</h4>
            <button className="btn btn-secondary d-grid gap-4 col-3 mx-auto" onClick={()=>setShow(!show)}> {show ? 'Hide Details':'Show More'}</button>
            { show &&
            <div>
                <table className="table table-secondary table-striped"> 
                    <thead>
                        <tr className="table-dark">
                        <th>Specification</th>
                        <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <th>Engine CC</th>
                            <td>{car.specification.cc}</td>
                         </tr>
                         <tr>
                            <th>Mileage</th>
                            <td>{car.specification.mileage}</td>
                         </tr>
                         <tr>
                            <th>Max Torque</th>
                            <td>{car.specification.maxTorque}</td>
                         </tr>
                         <tr>
                            <th>Full Capacity</th>
                            <td>{car.specification.fuelCapacity}</td>
                         </tr>
                    </tbody>
                </table>
            
            </div>
}
            <div>
                <button disabled={index===0} className="btn btn-warning mx-3 my-3 " onClick={()=>setIndex(index-1)}> &lt; </button>
                <button disabled={index===cars.length-1} className='btn btn-warning my-3' onClick={()=> setIndex(index+1)}> &gt;</button>
            </div>
        </div>
         

    )
}

export default CarGallary;