import {useParams,useNavigate} from 'react-router-dom'
import refrigerators from './Refrigerator_data'
const RefrigeratorDetails = ()=>{
    //calling hook of react-router-dom to get the value of route parameter
      const {id} = useParams()
      const navigate = useNavigate()
      const refrigerator = refrigerators.find(m=>m.id==id)
      return (
        <div className='p-3'>
            <h2>{refrigerator.brand} {refrigerator.model}</h2>
            <img src={refrigerator.image} style={{width:"300px" , height:"300px"}} alt={refrigerator.model}/>
            <h4>&#8377; {refrigerator.price}</h4>
            <h5>Specification Details</h5>
            <table className='table table-primary'>
                <thead>
                    <tr className='table-dark'>
                        <th>Product Information</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    
                <tr>
                        <th>SKU</th>
                        <td>{refrigerator.specification.SKU}</td>
                    </tr>

                    <tr>
                        <th>Capacity</th>
                        <td>{refrigerator.specification.capacity}</td>
                    </tr>

                    <tr>
                        <th>Type</th>
                        <td>{refrigerator.specification.type}</td>
                    </tr>

                    <tr>
                        <th>No. Of Door</th>
                        <td>{refrigerator.specification.noofdoor}</td>
                    </tr>

                    <tr>
                        <th>Country Of Origin</th>
                        <td>{refrigerator.specification.countryoforigin}</td>
                    </tr>


                </tbody>
            </table>
            <button className='btn btn-outline-success' onClick={ ()=>navigate("/elecs/refrigerator")}>Back to Gallery</button>
        </div>
      )
}

export default RefrigeratorDetails;