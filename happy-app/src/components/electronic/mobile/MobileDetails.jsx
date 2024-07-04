import {useParams,useNavigate} from 'react-router-dom'
import mobiles from './Mobile_data'
const MobileDetails = ()=>{
    //calling hook of react-router-dom to get the value of route parameter
      const {id} = useParams()
      const navigate = useNavigate()
      const mobile = mobiles.find(m=>m.id==id)
      return (
        <div className='p-3'>
            <h2>{mobile.brand} {mobile.model}</h2>
            <img src={mobile.Image} style={{width:"200px" , height:"400px"}} alt={mobile.model}/>
            <h4>&#8377; {mobile.price}</h4>
            <h5>Specification Details</h5>
            <table className='table table-primary table-striped'>
                <thead>
                    <tr className='table-dark'>
                        <th>Specification Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    
                <tr>
                        <th>Primary Camera</th>
                        <td>{mobile.specification.camera.primary}</td>
                    </tr>

                    <tr>
                        <th>Front Camera</th>
                        <td>{mobile.specification.camera.front}</td>
                    </tr>

                    <tr>
                        <th>Internal Storage</th>
                        <td>{mobile.specification.Storage}</td>
                    </tr>

                    <tr>
                        <th>RAM</th>
                        <td>{mobile.specification.ram}</td>
                    </tr>


                </tbody>
            </table>
            <button className='btn btn-outline-success' onClick={ ()=>navigate("/elecs/mobile")}>Back to Gallery</button>
        </div>
      )
}

export default MobileDetails;