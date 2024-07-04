import {useParams,useNavigate} from 'react-router-dom'
import laptops from './Laptop_data'
const LaptopDetails = ()=>{
    //calling hook of react-router-dom to get the value of route parameter
      const {id} = useParams()
      const navigate = useNavigate()
      const laptop = laptops.find(m=>m.id==id)
      return (
        <div className='p-3'>
            <h2>{laptop.brand} {laptop.model}</h2>
            <img src={laptop.image} style={{width:"200px" , height:"400px"}} alt={laptop.model}/>
            <h4>&#8377; {laptop.price}</h4>
            <h5>Specification Details</h5>
            <table className='table table-primary table-striped'>
                <thead>
                    <tr className='table-dark '>
                        <th>Specification Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    
                <tr>
                        <th>performance</th>
                        <td>{laptop.specification.performance}</td>
                    </tr>

                    <tr>
                        <th>Camera</th>
                        <td>{laptop.specification.camera}</td>
                    </tr>

                    <tr>
                        <th>Storage</th>
                        <td>{laptop.specification.storage}</td>
                    </tr>

                    <tr>
                        <th>RAM</th>
                        <td>{laptop.specification.ram}</td>
                    </tr>

                    <tr>
                        <th>Battery</th>
                        <td>{laptop.specification.battery}</td>
                    </tr>


                </tbody>
            </table>
            <button className='btn btn-outline-success' onClick={ ()=>navigate("/elecs/laptop")}>Back to Gallery</button>
        </div>
      )
}

export default LaptopDetails;